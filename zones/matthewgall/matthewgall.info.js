D("matthewgall.info", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
    ALIAS("@", "matthewgall.pages.dev.", CF_PROXY_ON),
    CNAME("www", "matthewgall.pages.dev.", CF_PROXY_ON),
    // Google Workspace
    GOOGLE_APPS_MX_RECORDS,
	CNAME("calendar", "ghs.google.com."),
	CNAME("docs", "ghs.google.com."),
	CNAME("mail", "ghs.google.com."),
    TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD4jsVvWz3j6MEaLXKsw2Ivf0TXsdRStpulqtx5ZRsGkmjkswL/ReaqzjeRyTEzn0BgJg0CB4QQluXzQRtgfVW0NO7k5TnEXSXEbHf3e2AU22TaM8F+cCJzWz+vaV0H6POC5pTobPlr/eE0xe4M+1T4zyVaKBrtz7yT/wk7vZkvtQIDAQAB"),
    // Google
    TXT("@", "google-site-verification=ijt4bmp2g3-krjeok_rziwfm1-autllgao8ii5m1e7k"),
    // Keybase
    TXT("_keybase", "keybase-site-verification=YT80psP0u8rHkbS38MhDYitlyAflrgjjwiXnlvQUnqw"),
    // Mailgun
    CNAME("email", "mailgun.org."),
    TXT("mailo._domainkey", "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC80jA6ar5r7u6tkQIfNI16zVH+pzYItk4M+9XM1ZOKI45/5Cf/knKtuG+Y16bM0NgbuF3qr8VMk+20x59a11pRr/j9NJJN5fwBwUksdKFstR6z75u1SyEY2qHjfv2175vpUt75TDfjzfSnKSQP/as1Tz716aZXEOsBcRLO/8cICwIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; adkim=s; aspf=s;"),
	// SPF
	TXT("@", "v=spf1 include:_spf.google.com include:mailgun.org -all"),
END);