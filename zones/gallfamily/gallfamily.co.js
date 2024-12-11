D("gallfamily.co", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
    TXT("@", "zoho-verification=zb49796448.zmverify.zoho.com"),
    TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDE+jt9HxkWWSIXzOFrfoMeZYUjovWArr0PvbGq0vqUDuJjAXGfeav/lMKzZdwnXIengBD8NDPabmDPdaRxqIbVc6BaSI1iHlKHZeJcEnBSpoTb66RCE9CkkwZ/lRpx/LRw2tBmxQL9GhitB3BW3PD0HVrZJrNNIJonNh61uZo7kwIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; rua=mailto:c0c600c20f534ec39ba5997f2f9a351a@dmarc-reports.cloudflare.net"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
END);