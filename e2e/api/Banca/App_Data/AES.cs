using System;
using System.Text;
using System.Security.Cryptography;
using System.IO;

namespace Banca
{
    public class AES
    {

        public static string DecryptDataAES(string EncryptedText, string Encryptionkey)
        {
            byte[] Hex2Bytes = StringToByteArray(EncryptedText); //convert HEX string to bytes
            string result = Encoding.UTF8.GetString(Hex2Bytes);
            byte[] encryptedBytes = Convert.FromBase64String(result); //convert resultant byte into Base64
            return Encoding.UTF8.GetString(Decrypt(encryptedBytes, GetRijndaelManaged(Encryptionkey)));
        }

        private static byte[] Decrypt(byte[] encryptedData, RijndaelManaged rijndaelManaged)
        {
            return rijndaelManaged.CreateDecryptor()
                .TransformFinalBlock(encryptedData, 0, encryptedData.Length);
        }

        public static RijndaelManaged GetRijndaelManaged(String secretKey)
        {
            var keyBytes = new byte[16];
            var secretKeyBytes = Encoding.UTF8.GetBytes(secretKey);
            Array.Copy(secretKeyBytes, keyBytes, Math.Min(keyBytes.Length, secretKeyBytes.Length));
            return new RijndaelManaged
            {
                Mode = CipherMode.ECB,
                Padding = PaddingMode.PKCS7,
                KeySize = 128,
                BlockSize = 128,
                Key = keyBytes,
                IV = keyBytes
            };
        }

        static private  byte[] StringToByteArray(String hex)
        {
            int NumberChars = hex.Length;
            byte[] bytes = new byte[NumberChars / 2];
            for (int i = 0; i < NumberChars; i += 2)
            {
                bytes[i / 2] = Convert.ToByte(hex.Substring(i, 2), 16);
            }
            return bytes;
        }

        public static string EncryptDataAES(string textData, string Encryptionkey)
        {
            try
            {
                RijndaelManaged objrij = new RijndaelManaged();
                //set the mode for operation of the algorithm
                objrij.Mode = CipherMode.ECB;
                //set the padding mode used in the algorithm.
                objrij.Padding = PaddingMode.PKCS7;
                //set the size, in bits, for the secret key.
                objrij.KeySize = 0x80;  //128
                //set the block size in bits for the cryptographic operation.
                objrij.BlockSize = 0x80;  //128
                //set the symmetric key that is used for encryption &amp; decryption.
                byte[] passBytes = Encoding.UTF8.GetBytes(Encryptionkey);
                //set the initialization vector (IV) for the symmetric algorithm
                byte[] EncryptionkeyBytes = new byte[] { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
                int len = passBytes.Length;
                if (len > EncryptionkeyBytes.Length)
                {
                    len = EncryptionkeyBytes.Length;
                }
                Array.Copy(passBytes, EncryptionkeyBytes, len);
                objrij.Key = EncryptionkeyBytes;
                objrij.IV = EncryptionkeyBytes;
                //Creates symmetric AES object with the current key and initialization vector IV.
                ICryptoTransform objtransform = objrij.CreateEncryptor();
                byte[] textDataByte = Encoding.UTF8.GetBytes(textData);
                //Final transform the test string.
                // return Convert.ToBase64String(objtransform.TransformFinalBlock(textDataByte, 0, textDataByte.Length));
                byte[] TextByte = Encoding.Default.GetBytes(Convert.ToBase64String(objtransform.TransformFinalBlock(textDataByte, 0, textDataByte.Length)));

                string hexString = BitConverter.ToString(TextByte);

                hexString = hexString.Replace("-", "");

                return hexString;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }

}

