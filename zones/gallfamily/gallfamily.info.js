D("gallfamily.info", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
    TXT("@", "zoho-verification=zb04580362.zmverify.zoho.com"),
    TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFbmkvsgvn1dVF5mfBuj8pSdRDXSa4ggN2ylmKhZ+41yJd+nYFOKUGpBZWtuVATF2o8OZQs0LNz310tuEu3SWKat868ge3ASO52RbR4UFsIxCLE/Lw2i9fvcu4IUatoav5SVazzjhXcv8sVv3m0wH8XUxR8F185LX1itjkvEl38QIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=quarantine; rua=mailto:bf3ba359ebe744a193266cde66a4e1d6@dmarc-reports.cloudflare.net"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
END);