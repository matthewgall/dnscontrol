D("disability.watch", REG_NONE, DnsProvider(DNS_CLOUDFLARE_DISABILITYWATCH),
    ALIAS("@", "disabilitywatch.pages.dev.", CF_PROXY_ON),
    CNAME("www", "disabilitywatch.pages.dev.", CF_PROXY_ON),
    // Migadu
    MIGADU_RECORDS,
    MIGADU_DKIM('disability.watch'),
    TXT("@", "hosted-email-verify=vgbtgwfa"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; rua=mailto:777aabbfc403425585b2db4df09f991f@dmarc-reports.cloudflare.net;"),
	// SPF
	TXT("@", "v=spf1 include:spf.migadu.com -all"),
END);