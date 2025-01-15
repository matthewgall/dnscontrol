D("aviationmuseum.wales", REG_NONE, DnsProvider(DNS_CLOUDFLARE_SWAM),
    ALIAS("@", "swam-parked-domains.pages.dev.", CF_PROXY_ON),
    CNAME("www", "swam-parked-domains.pages.dev.", CF_PROXY_ON),
    // Migadu
	MIGADU_DKIM('aviationmuseum.wales'),
    TXT("@", "hosted-email-verify=s9wfcvle"),
    // Zoho
    ZOHO_EU_RECORDS,
	TXT("@", "zoho-verification=zb93670420.zmverify.zoho.eu"),
    TXT("zoho1._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1edRqYFgG5FSEj4lsI9+EAsyYK2ae4y5MvA1tC1BJwkfyKCwTx2ziFhbNfWBpwrZDusve3AQW60YVM3gakKCpR7RbOnnA22zHm1nHpIB2f0RTndsbzWoafpYLh7uDeKpjDfAUf898gkFZbpexeMbE0YZrjUjofpJy1o8rqJSTk9VfOY8wAms9FSxLRAWq+FkKHR2IWmCRwZnru8aUKocDxClw7Mz9qpIoVjjKk328wuy8Ai+xxQHPysdm3XDV3CudLigsIdSY3pWHN1ZVGn0i6DXBmE3K2FiEHAoSj7PazkyzmWzaLVDO16msFujqFJxopy3mtXlaRLtUyCPkU3SVQIDAQAB"),
    // DMARC
	TXT("_dmarc", "=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; rua=mailto:5cf0b49852c54ebcb9b881f6eb6cf0e9@dmarc-reports.cloudflare.net;"),
	// SPF
	TXT("@", "v=spf1 include:zohomail.eu include:spf.migadu.com -all"),
END);