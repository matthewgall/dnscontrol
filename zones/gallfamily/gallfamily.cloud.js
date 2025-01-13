D("gallfamily.cloud", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
	TXT("@", "zoho-verification=zb94043068.zmverify.zoho.com"),
	TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCY6itpLSJjGX/zjTPiYHxMIGoubmwOMcy2USxVDUkyV0Z3MG+4o+nzlamo5jFfTwdnPjx5QBfIBvcNkX3+BsmEh4Wkh3ssybDxLzrsUGZ2dJoTdbdjGVJTgzNuO9vn9rVcPmu53EavmXRy5+3O3xVLMiUkqmZJVCwSrR3zIdVnQQIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
END);