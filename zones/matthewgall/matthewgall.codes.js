D("matthewgall.codes", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
    ALIAS("@", "29f08865-c378-482f-b6e6-cff961a46957.cfargotunnel.com.", CF_PROXY_ON),
	CNAME("www", "matthewgall.codes.", CF_PROXY_ON),
    AAAA("bot", "0100::", CF_PROXY_ON),
    // Servers
	A("alpha", "65.108.196.124"),
	AAAA("alpha", "2a01:4f9:1a:985e::2"),
    // Fastmail
    FASTMAIL_MX_RECORDS,
    FASTMAIL_DKIM('matthewgall.codes'),
    // SMTP2GO
	CNAME("em627950", "return.smtp2go.net."),
	CNAME("s627950._domainkey", "dkim.smtp2go.net."),
	// Mailgun
	CNAME("email", "mailgun.org."),
	TXT("pic._domainkey", "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgvuNdEnk9FlHPKDYRMCDAGb7Q2qPAEplO2jourBFSCx8LGoe8lDxZNvTFP3/FLn3yHhgy4ueoyiMXtXhTbWPzuPDsnWgaWF2PdlVx2T3rXp8A+H58XAywjsgTfa0KKUriJkz8P/NjiG3XiGnY/oqSNzovc2YMtg+4Xn6zwxwEaQIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
	TXT("@", "v=spf1 include:spf.messagingengine.com include:mailgun.org -all"),
END);