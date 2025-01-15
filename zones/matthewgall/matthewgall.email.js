D("matthewgall.email", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
	// Fastmail
    FASTMAIL_RECORDS,
    FASTMAIL_DKIM('matthewgall.email'),
    // Wildcard
    MX("*", 1, "in1-smtp.messagingengine.com."),
    MX("*", 5, "in2-smtp.messagingengine.com."),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
    TXT("@", "v=spf1 include:spf.messagingengine.com -all"),
END);