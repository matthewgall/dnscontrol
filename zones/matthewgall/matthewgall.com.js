D("matthewgall.com", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
    ALIAS("@", "matthewgall.pages.dev.", CF_PROXY_ON),
    CNAME("www", "matthewgall.pages.dev.", CF_PROXY_ON),
    AAAA("pgp", "100::", CF_PROXY_ON),
	AAAA("download", "100::", CF_PROXY_ON),
    // Servers
	A("alpha", "65.108.196.124"),
	AAAA("alpha", "2a01:4f9:1a:985e::2"),
    // MyOrderBox
    CNAME("manage.names", "cp.myorderbox.com."),
    CNAME("manage.domains", "cp-2.myorderbox.com."),
    // ImprovMX
    IMPROVMX_MX_RECORDS,
    // Bluesky
	TXT("_atproto", "did=did:plc:tu2krla2oyp2tgqaz2roggns"),
    // Google
    TXT("@", "google-site-verification=Pe449h_4--dGFcNeQDA139Ii66zz2IEJySUI4HPZLVU"),
    // Bing
    CNAME("5db3dc938682cc15c7fa21b2243b366a", "verify.bing.com."),
    // Keybase
    TXT("@", "keybase-site-verification=0CQeFvAAYJ1GH8q7LcSMHEWgBd5R9ye-mlFNpN3A6mk"),
    // DKIM
    TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaTzsVY0V0hmBH4EU9UEmcStldvuf6AmVmD9B7w8UeE5af8ShAa+6Ea9BZgwK/CtDYBnTpEafMvVJk7QAIIKF5U0j4QxERJdil5Pv3DgKjSX9soDnQi8GTKZkxTd/fb30uI/3XK6jYjX0W8M/7Y9yseJE+wO6FvvBfMCuuC1548QIDAQAB"),
    TXT("k1._domainkey", "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDV0INbTMoqRoWXBzRfF+6n1ND+p5veNPTyn8EGRyWjxXjNJKD881l/FxIdtXRPNwgFqzdaLy4AQYWWMjJY94S7ggwPDAvBx0fxwbyxXwK7sUgplogJaBflew4fVodpNinW5Vp505lG4uZR7Wi+XmAKu99LV7pWF8WekqryafAdJQIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; adkim=s; aspf=s; rua=mailto:617d6d84a9c24f1599d41f0df05d4655@dmarc-reports.cloudflare.net;"),
	// SPF
	TXT("@", "v=spf1 include:_spf.google.com include:spf.improvmx.com -all"),
END);