using System;
using System.Configuration;
using System.Diagnostics;
using System.IO;

namespace Banca
{
    public class LogFile
    {
        public static void EnrichLog(string fromModule, string fromMethod, string errSource, string errMessage)
        {

            bool EnableAdditionalLog = false;
            try
            {
                EnableAdditionalLog = (Convert.ToString(ConfigurationManager.AppSettings["EnableAdditionalLog"]).ToUpper() == "YES");
            }
            catch (Exception)
            {
            }

            if (EnableAdditionalLog)
                WriteLog(fromModule, fromMethod, errSource, errMessage);
        }

        public static void WriteLog(string fromModule, string fromMethod, string errSource, string errMessage)
        {
            try
            {
                string sDate = DateTime.Now.Date.ToString("yyyyMMMdd");

                FileStream logFile = new FileStream(AppDomain.CurrentDomain.BaseDirectory + @"ErrorLogs\" + ConfigurationManager.AppSettings["LogFileName"] + "[" + sDate + "].log", FileMode.Append);
                StreamWriter streamWriter = new StreamWriter(logFile);

                // Write to the file using StreamWriter class 
                streamWriter.BaseStream.Seek(0, SeekOrigin.End);
                streamWriter.Write("{0} ", DateTime.Now.ToLongTimeString());
                streamWriter.Write("Module Name : " + fromModule + " (" + fromMethod + ") ");
                streamWriter.Write("Error Source : " + errSource + "  ");
                streamWriter.Write("Error Message : " + errMessage + " " + Environment.NewLine);
                streamWriter.Flush();
                streamWriter.Close();

                logFile.Close();
            }
            catch (IOException exio)
            {
                Debug.Print(exio.ToString());
            }
            catch (Exception ex)
            {
                Debug.Print(ex.ToString());
            }
            finally
            {

            }

        }


    }
}
