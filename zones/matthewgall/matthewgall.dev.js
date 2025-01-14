D("matthewgall.dev", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
    ALIAS("@", "matthewgall.pages.dev.", CF_PROXY_ON),
    CNAME("www", "matthewgall.pages.dev.", CF_PROXY_ON),
	AAAA("download", "100::", CF_PROXY_ON),
    // Servers
	A("alpha", "65.108.196.124"),
	AAAA("alpha", "2a01:4f9:1a:985e::2"),
    // Fastmail
    FASTMAIL_RECORDS,
    FASTMAIL_DKIM('matthewgall.dev'),
	// Mailgun
	TXT("pic._domainkey.no-reply", "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDCLr2ryjJSRAqInS6oulyjiYsYvirv8TbhWqnDFgb/34hvQXQnnxx6agnjZNz7AtnfvY5QbquX5CC2Q/9y9Oy1eqZNi6JyJH2D9+gA9VusdUkQI726kXsZ1KCkO+RGVTLhHkhipy+n4p4PY8jck4x+1bUcpnVPYiJJ0PvLzMJjJwIDAQAB"),
    TXT("no-reply", "v=spf1 include:mailgun.org -all"),
    // Bluesky
    TXT("_atproto", "did=did:plc:jcwt7pglpfrhji6pv4naie6u"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; rua=mailto:28c4aa00c5c3403ba7d9add3ded71ccc@dmarc-reports.cloudflare.net;"),
	// SPF
	TXT("@", "v=spf1 include:spf.messagingengine.com -all"),
END);