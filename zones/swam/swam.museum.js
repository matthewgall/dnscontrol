D("swam.museum", REG_NONE, DnsProvider(DNS_CLOUDFLARE_SWAM),
    ALIAS("@", "swam-parked-domains.pages.dev.", CF_PROXY_ON),
    CNAME("www", "swam-parked-domains.pages.dev.", CF_PROXY_ON),
    AAAA("mail", "0100::", CF_PROXY_ON),
    // SMTP2GO
    SMTP2GO_RECORDS,
    CNAME("inbound", "track.smtp2go.net."),
    // Fastmail
    FASTMAIL_RECORDS,
    FASTMAIL_DKIM('swam.museum'),
    CNAME("autodiscover", "swam-autodiscover.netlify.app."),
    // Zoho
    TXT("@", "zoho-verification=zb97145866.zmverify.zoho.eu"),
    // Nextcloud
	CNAME("nextcloud", "nx22079.your-storageshare.de."),
	CNAME("opensky", "nx22079.your-storageshare.de."),
    AAAA("share", "0100::", CF_PROXY_ON),
    // Unifi
    CNAME("welcome", "m01655.hostifi.com."),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; rua=mailto:7a6a7480c2154064af7d4e96d2784497@dmarc-reports.cloudflare.net;"),
	// SPF
	TXT("@", "v=spf1 include:spf.messagingengine.com -all"),
END);