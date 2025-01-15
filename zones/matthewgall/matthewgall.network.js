D("matthewgall.network", REG_NONE, DnsProvider(DNS_CLOUDFLARE_MATTHEWGALL),
	CLOUDFLARE_DISCARD_RECORDS,
    // Zoho
    ZOHO_MX_RECORDS,
    CNAME("mail", "business.zoho.com."),
	TXT("@", "zoho-verification=zb15659049.zmverify.zoho.com"),
	TXT("zoho._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLERvyRejaC9To2Ka4L/WhX2E5679SxtDNEys29tF4f8olhn/LDdhdoVy6dEZmKoUmCo9QXmwpYRXsU01Jxb9y0DU2w0x7OW4VnTX8pi2jf0S189Mlx/YFeRzhJ96TmP+xqLsXlj07MH5lxouhfBgLcEKav5lNixQFuEb+eSE0swIDAQAB"),
    // Mailgun
    CNAME("email", "eu.mailgun.org."),
    TXT("pic._domainkey", "k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAufnEMKExMTjaZ/N8AfXpESl/hEiFd/KiV2KS7Q4Fb/Go+Mn5hABbda+3AdVOziqnnPxn6DNG8PfuDqVrOD1pV5yWP1FDjg/SsMFYaf/Jd+QeWhrKRvMKLcGppoG77ZeON5XYmMll3fA0mnIzS7M/fWg0BbhvSBrEjcCc5qgqxR4tiLKB1iWjeirSVkgoPuTVrakFMGFA9xNg1T+AOBeYDfNQrdvFdQ5XhnDw4empinN3dwMvDPorQ/5axklporHZMwbyHj9T2gwPIZojGh4Z6XOoLtS7onPNKaVB4USt32Qn/SVQzGte6R44DCgts1zSwxehiyjJV06XicfFAHfB6wIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com include:eu.mailgun.org -all"),
END);