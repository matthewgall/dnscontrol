D("gallfamily.life", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
	TXT("@", "zoho-verification=zb75719150.zmverify.zoho.com"),
	TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCL0M/9PfvTvxhzumrwYVImP/wm8gUT9Xre/F86+iMFSQNGU70VsDlW9bQ+fn6GajNxwlggQqVLqz2S663BC5w21AIugbL3JZUS6fQGD5AO9CsrpXA/kn22nPysDAP2nXOtADxNcriwti+6Mc+xh1svu68n2mevM7w50bwnAh+R8QIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
END);