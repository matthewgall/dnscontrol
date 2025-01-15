D("gall.family", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
	CNAME("mail", "business.zoho.com."),
    // PiHole (Global)
	A("pihole", "78.47.164.121"),
	AAAA("pihole", "2a01:4f8:1c17:57c8::1"),
    // Storage
	A("storage", "107.189.28.115"),
	AAAA("storage", "2605:6400:30:f019:f98c:a5cf:f345:2399"),
    // Heol-y-Blodau
	CNAME("heol-y-blodau.homeassistant", "a1b73d59-65bc-4f7b-bb97-eadc29e61c86.cfargotunnel.com.", CF_PROXY_ON),
	CNAME("heol-y-blodau.pihole", "6411731e-032c-432a-9796-e8df7dea52d7.cfargotunnel.com.", CF_PROXY_ON),
    // Cloudflare Calls
	AAAA("call", "100::", CF_PROXY_ON),
    // Nextcloud
	CNAME("nextcloud", "nx20941.your-storageshare.de."),
    // Zoho
    ZOHO_RECORDS,
	TXT("@", "zoho-verification=zb01778887.zmverify.zoho.com"),
	TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzBhKf48d5e6IgdKj7jTEPcGPZjNZvCMP6lNtfXqY9BZoZCSMZk1qQjPtbULiTExEBJg4k+hOJuAsq4/A2/yBdR2GrkB74pOWSvXQEe7Rhd9pt6z+JXLTkx/GFV5PfZ6CQ22q/y3Teu9AE5dgIa7RUjO+h/XbkPU5yVJwt1t2CJwIDAQAB"),
    // SMTP2GO
	SMTP2GO_RECORDS,
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; rua=mailto:e322b350957840d9b1598d7c6c391f12@dmarc-reports.cloudflare.net"),
	// SPF
	TXT("@", "v=spf1 include:spf.smtp2go.com include:zoho.com -all"),
END);