D("gallfamily.network", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=quarantine; rua=mailto:511c2c1ca5f24a4c8a90b942950e8598@dmarc-reports.cloudflare.net"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
END);