D("gallfamily.org", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; rua=mailto:47edee4b30f847d1b1e1739bdbeae9c7@dmarc-reports.cloudflare.net"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
END);