D("mgall.me", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
    CLOUDFLARE_DISCARD_RECORDS,
	// Fastmail
    FASTMAIL_RECORDS,
    FASTMAIL_DKIM('mgall.me'),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
    TXT("@", "v=spf1 include:spf.messagingengine.com -all"),
END);