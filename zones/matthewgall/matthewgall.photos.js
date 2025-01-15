D("matthewgall.photos", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
    AAAA("@", "0100::", CF_PROXY_ON),
    CNAME("www", "domains.smugmug.com."),
	// DKIM
    TXT("*._domainkey", "v=DKIM1; p="),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
    TXT("@", "v=spf1 -all"),
END);