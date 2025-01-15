D("aviation.wales", REG_NONE, DnsProvider(DNS_CLOUDFLARE_SWAM),
    ALIAS("@", "swam-parked-domains.pages.dev.", CF_PROXY_ON),
    CNAME("www", "swam-parked-domains.pages.dev.", CF_PROXY_ON),
    // Zoho
    ZOHO_EU_RECORDS,
    TXT("@", "zoho-verification=zb00805115.zmverify.zoho.eu"),
    TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIrdpfMRKEsvnRATGVOesYUJ69e7vzwx7Z4vhkhkVT1UccXkEdcc/g9N6EGs3nTrSjSgtVPe/DBNeI5wJkBLhcK/Z2C39+iz4Cn/T+XGSDcqo9w3LUb6am7PmMXf1LYA5YdqCSIa56E4hQXmsTAX+gqjVycEuu6NeB8y24u1YwNwIDAQAB"),
    // Migadu
    TXT("@", "hosted-email-verify=dq6we1xw"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; rua=mailto:599bb86899f44dd089915e05f7a83b60@dmarc-reports.cloudflare.net;"),
	// SPF
	TXT("@", "v=spf1 include:zohomail.eu include:spf.migadu.com -all"),
END);