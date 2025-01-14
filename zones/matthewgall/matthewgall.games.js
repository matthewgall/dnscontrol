D("matthewgall.games", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
    CLOUDFLARE_DISCARD_RECORDS,
	// DKIM
    TXT("*._domainkey", "v=DKIM1; p="),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
    TXT("@", "v=spf1 -all"),
END);