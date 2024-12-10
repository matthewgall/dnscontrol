D("gallfamily.chat", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "@", CF_PROXY_ON),
    // Zoho
    ZOHO_MX_RECORDS,
	TXT("@", "zoho-verification=zb71828324.zmverify.zoho.com"),
	TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDB3WAn7nY75FPw6mgmab3FxOOqV/Cg8q4M0jLr3KWKeZwbi/A9kWh6CU2KGKD0G7YlgApqJ3EbbNzBWUqLwYXL/a2BfVUUbSgY/2kjkLxUzlPPQmTIV9WsfeYJRaCJQrgLBYLWZSETxrE2DrNDATa/aiU6crcMViiwzObPItbMSwIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1; p=quarantine; rua=mailto:cc4634cee77d4f6d8bea2ef8afa2a286@dmarc-reports.cloudflare.net"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
);