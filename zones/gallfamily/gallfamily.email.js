D("gallfamily.email", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
	TXT("@", "zoho-verification=zb34044617.zmverify.zoho.com"),
	TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQwwnno4V5l11UnPJnYsTymF1ThLlR4+L4HSFsQoFe/VD/xzEIsykwS7IudNny5uRQVXkFQy0jR8Zf3EBUnwrzZaD0a+liKcghjKIaNODzdEm5lT3HwmJTtYJ+7UoNhO0239yssTVWvz2SHmqJLV++QU6sK6AKbQHfmFAePwHXAwIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
	// SPF
	TXT("@", "v=spf1 include:zoho.com -all"),
END);