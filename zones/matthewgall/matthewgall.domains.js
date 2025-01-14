D("matthewgall.domains", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
	// Fastmail
    FASTMAIL_RECORDS,
    FASTMAIL_DKIM('matthewgall.domains'),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
    TXT("@", "v=spf1 include:spf.messagingengine.com -all"),
END);