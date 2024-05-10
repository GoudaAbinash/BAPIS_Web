using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace Banca
{
  public class SecurityManager
    {
        private const string Alg = "HmacSHA256";
        private const string Salt = "rz8LuOtFBXphj9WQfvFh";
        private const int ExpirationMinutes = 240;


        public static string GenerateToken(string ID, string userAgent, long ticks)
        {
            var hash = string.Join(":", new string[] { ID, userAgent, ticks.ToString() });
            string hashLeft;
            string hashRight;

            using (HMAC hmac = HMACSHA256.Create(Alg))
            {
                hmac.Key = Encoding.UTF8.GetBytes(GetHashedPassword(ID));
                hmac.ComputeHash(Encoding.UTF8.GetBytes(hash));

                hashLeft = Convert.ToBase64String(hmac.Hash);
                hashRight = string.Join(":", new string[] { ID, ticks.ToString() });
            }

            return Convert.ToBase64String(Encoding.UTF8.GetBytes(string.Join(":", hashLeft, hashRight)));
        }

        public static string GetHashedPassword(string ID)
        {
            var key = string.Join(":", new string[] { ID, Salt });

            using (HMAC hmac = HMACSHA256.Create(Alg))
            {
                // Hash the key.
                hmac.Key = Encoding.UTF8.GetBytes(Salt);
                hmac.ComputeHash(Encoding.UTF8.GetBytes(key));

                return Convert.ToBase64String(hmac.Hash);
            }
        }

        public static bool IsTokenValid(string token, string userAgent)
        {
            var result = false;

            try
            {
                // Base64 decode the string, obtaining the token:username:timeStamp.
                var key = Encoding.UTF8.GetString(Convert.FromBase64String(token));

                // Split the parts.
                var parts = key.Split(new char[] { ':' });
                if (parts.Length == 3)
                {
                    var id = parts[1];
                    var ticks = long.Parse(parts[2]);
                    var timeStamp = new DateTime(ticks);
                    
                    // Ensure the timestamp is valid.
                    var expired = Math.Abs((DateTime.UtcNow - timeStamp).TotalMinutes) > ExpirationMinutes;
                    if (!expired)
                    {
                        var computedToken = GenerateToken(id, userAgent, ticks);
                        result = (token == computedToken);
                    }
                }
            }
            catch
            {
                //return false;
            }

            return result;
        }

        public static string GetLeadKey(string token)
        {
            try
            {
                var key = Encoding.UTF8.GetString(Convert.FromBase64String(token));
                var parts = key.Split(new char[] { ':' });
                if (parts.Length == 3)
                {
                    return parts[1].ToString();
                }
                return "0";
            }
            catch
            {
                return "0";
            }
        }
    }
}
