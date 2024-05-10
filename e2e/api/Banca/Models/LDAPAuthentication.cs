using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.Linq;
using System.Web;
using System.Text;

/// <summary>
/// Summary description for LDAPAuthentication
/// </summary>
public class LDAPAuthentication
{
    public LDAPAuthentication()
    {
        // TODO: Complete member initialization
    }
    private string _strPath = "LDAP://10.1.41.11";
    private string _filterAttribute, _managerEmail;
    public LDAPAuthentication(string strPath)
    {
        _strPath = strPath;
    }
    public bool IsAuthenticated(string strDomain, string strUsername, string strPassword)
    {
        string strDomainAndUsername = strDomain + @"\" + strUsername;
        DirectoryEntry objDirEntry = new DirectoryEntry("LDAP://10.1.41.11", strDomainAndUsername, strPassword);
        try
        {
            object obj = objDirEntry.NativeObject;
            DirectorySearcher search = new DirectorySearcher(objDirEntry);
            search.Filter = "(SAMAccountName=" + strUsername + ")";
            search.PropertiesToLoad.Add("cn");
            SearchResult result = search.FindOne();
            if (null == result)
            {
                return false;
            }
            _strPath = result.Path;
            _filterAttribute = (string)result.Properties["cn"][0];
        }
        catch (Exception ex)
        {
            throw new Exception("Error authenticating user. " + ex.Message);
        }
        return true;
    }
    public bool IsAuthenticatedUSER(String usr)
    {
        DirectoryEntry objDirEntry = new DirectoryEntry();
        try
        {
            object obj = objDirEntry.NativeObject;
            DirectorySearcher search = new DirectorySearcher(objDirEntry);
            search.Filter = "(SAMAccountName=" + usr + ")";
            search.PropertiesToLoad.Add("cn");
            SearchResult result = search.FindOne();
            if (null == result)
            {
                return false;
            }
            _strPath = result.Path;
            _filterAttribute = (string)result.Properties["cn"][0];
        }
        catch (Exception ex)
        {
            throw new Exception("Error authenticating user. " + ex.Message);
        }
        return true;
    }
    public string GetGroups()
    {
        DirectorySearcher search = new DirectorySearcher(_strPath);
        search.Filter = "(cn=" + _filterAttribute + ")";
        search.PropertiesToLoad.Add("memberOf");
        StringBuilder groupNames = new StringBuilder();
        try
        {
            SearchResult result = search.FindOne();
            int propertyCount = result.Properties["memberOf"].Count;
            string dn;
            int equalsIndex, commaIndex;

            for (int propertyCounter = 0;propertyCounter < propertyCount;propertyCounter++)
            {
                dn = (string)result.Properties["memberOf"][propertyCounter];
                equalsIndex = dn.IndexOf("=", 1);
                commaIndex = dn.IndexOf(",", 1);
                if (-1 == equalsIndex)
                {
                    return null;
                }
                groupNames.Append(dn.Substring((equalsIndex + 1), (commaIndex - equalsIndex) - 1));
                groupNames.Append("|");
            }
        }
        catch (Exception ex)
        {
            throw new Exception("Error obtaining group names. " + ex.Message);
        }
        return groupNames.ToString();
    }
    public String IsAuthenticatedName(string strUsername)
    {
        string strDomainAndUsername = _strPath + @"\" + strUsername;
        DirectoryEntry objDirEntry = new DirectoryEntry("LDAP://10.1.41.11");
        try
        {
            object obj = objDirEntry.NativeObject;
            DirectorySearcher search = new DirectorySearcher(objDirEntry);
            search.Filter = "(SAMAccountName=" + strUsername + ")";
            search.PropertiesToLoad.Add("cn");
            SearchResult result = search.FindOne();
            _strPath = result.Path;
            _filterAttribute = (string)result.Properties["cn"][0];
        }
        catch (Exception ex)
        {
            _filterAttribute = "User Does not match";
            //throw new Exception("Error authenticating user. " + ex.Message);
        }
        finally
        {
        }
        return _filterAttribute;
    }
    public String IsAuthenticatedEmail(string strUsername)
    {
        string strDomainAndUsername = _strPath + @"\" + strUsername;
        DirectoryEntry objDirEntry = new DirectoryEntry("LDAP://10.1.41.11");
        try
        {
            object obj = objDirEntry.NativeObject;
            DirectorySearcher search = new DirectorySearcher(objDirEntry);
            search.Filter = "(SAMAccountName=" + strUsername + ")";
            search.PropertiesToLoad.Add("mail");
            SearchResult result = search.FindOne();
            _strPath = result.Path;
            _filterAttribute = (string)result.Properties["mail"][0];
        }
        catch (Exception ex)
        {
            throw new Exception("Error authenticating user. " + ex.Message);
        }
        return _filterAttribute;
    }
    public String FunGetManagerName(string strUsername)
    {
        string strDomainAndUsername = _strPath + @"\" + strUsername;
        DirectoryEntry objDirEntry = new DirectoryEntry("LDAP://10.1.41.11");
        try
        {
            object obj = objDirEntry.NativeObject;
            DirectorySearcher search = new DirectorySearcher(objDirEntry);
            search.Filter = "(SAMAccountName=" + strUsername + ")";
            search.PropertiesToLoad.Add("manager");
            SearchResult result = search.FindOne();
            _strPath = result.Path;
            _filterAttribute = (string)result.Properties["manager"][0];
        }
        catch (Exception ex)
        {
            throw new Exception("Error authenticating user. " + ex.Message);
        }
        return _filterAttribute;
    }
}