using System;
using System.Linq;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Encodings;
using Org.BouncyCastle.Crypto.Engines;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Math;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Net.Http;

namespace Banca
{
  public  class CommonFunction
  {
    public static string DynamicKey()
    {
      try
      {
        //UCO<DD>FUTURE<MM>INS<YY>
        //UCO15FUTURE12INS20

        DateTime date = DateTime.Now;
        string[] dateString = date.ToString("dd-MM-yy").Split('-');

        string Key = $"UCO{dateString[0]}FUTURE{dateString[1]}INS{dateString[2]}";
        return Key;
      }
      catch (Exception ex)
      {
        throw ex;
      }

    }

    public static string RandomGenkey(int length)
    {
      try
      {
        Random random = new Random();
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return new string(Enumerable.Repeat(chars, length)
        .Select(s => s[random.Next(s.Length)]).ToArray());
      }
      catch (Exception ex)
      {
        throw ex;
      }
    }


    public static string Generatehash256(string text)
    {
      byte[] message = Encoding.UTF8.GetBytes(text);
      byte[] hashValue;
      SHA256Managed hashString = new SHA256Managed();
      string hex = "";
      hashValue = hashString.ComputeHash(message);
      foreach (byte x in hashValue)
      {
        hex += String.Format("{0:x2}", x);
      }
      return hex;
    }


    public static string getEncriptedValue(string PlainValue, string strPublicKeyPath)
    {
      try
      {


        byte[] plainBytes = Encoding.UTF8.GetBytes(PlainValue);

        X509Certificate2 x509Certificate = new X509Certificate2(strPublicKeyPath);

        RSACryptoServiceProvider prov = x509Certificate.PublicKey.Key as RSACryptoServiceProvider;

        RSAParameters parameters = prov.ExportParameters(false);

        AsymmetricKeyParameter keyParam = new RsaKeyParameters(false,

                        new BigInteger(1, parameters.Modulus),

                        new BigInteger(1, parameters.Exponent));



        OaepEncoding enCryptor = new OaepEncoding(new RsaBlindedEngine(), new Sha256Digest(), new Sha1Digest(), null);

        BufferedAsymmetricBlockCipher cipher = new BufferedAsymmetricBlockCipher(enCryptor);

        cipher.Init(true, keyParam);

        cipher.ProcessBytes(plainBytes, 0, plainBytes.Length);

        try

        {
          byte[] encBytes = cipher.DoFinal();
          return Convert.ToBase64String(encBytes);
        }
        catch (Exception ex)
        {
          return "";

        }
      }
      catch (Exception ex)
      {
        throw ex;
      }

    }

    public static async System.Threading.Tasks.Task<string> UCORequestAsync(string url,dynamic content=null)
    {
      try
      {
        var request = new HttpRequestMessage(HttpMethod.Post, url);
        var client = new HttpClient();
        if (content != null)
        {
          request.Content = new FormUrlEncodedContent(content);
        }
        var resss = await client.SendAsync(request);
        string htmlData = await resss.Content.ReadAsStringAsync();
        return htmlData;
      }
      catch(Exception ex)
      {
        LogFile.WriteLog("CommonFunction", "UCORequestAsync(string url,dynamic content=null)", ex.Source, ex.Message);
        return null;
      }
     

    }
  }

  
}
