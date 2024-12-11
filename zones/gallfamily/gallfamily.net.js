D("gallfamily.net", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // SMTP2GO
    SMTP2GO_RECORDS,
    // Zoho
    ZOHO_MX_RECORDS,
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; rua=mailto:58d8922b90814c66877ecbefb9411116@dmarc-reports.cloudflare.net"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
END);