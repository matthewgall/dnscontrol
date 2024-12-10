D("gallfamily.co.uk", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
	TXT("@", "zoho-verification=zb46220098.zmverify.zoho.com"),
	TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDnpy1qj1c3HmCom9yLGF9uDyzFh62v9zg2gaULCXAEZYPRRb5TB5VlVXELcuKuhuu1OSF1RRjKnwf1iDNgZrxU9uMYeV1nGd2AL74MSRiyWrn1S09GMuotm1Dv/7gvWDBgyJarPujcJMr2EsMVWpwivgKGsxk/7WjzyBOB1Y5kwIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=quarantine; rua=mailto:1a251bfdead34825910fb3879858917d@dmarc-reports.cloudflare.net"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
END);