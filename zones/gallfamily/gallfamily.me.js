D("gallfamily.me", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
    TXT("@", "zoho-verification=zb19591725.zmverify.zoho.com"),
	TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaHBBNOTCPgl2mZxJ6bxmbOSqeMqMMEB3STDNTHxllU3dKgLbVXQdHvlIfKPrQYpw73z34lWLMABSBx5C9x2l2TMYH+hHPMgXsAlL2YUkp08SK3Mge8n8wU2DP7a431tIQJaSwRF4GKJ0UViXUUXxmET5dq1H4jx6pupPj+45vlQIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=quarantine; rua=mailto:5bf88cb63ce64815b76ea541cfb29b78@dmarc-reports.cloudflare.net"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
);