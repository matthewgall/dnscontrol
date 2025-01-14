var FASTMAIL_RECORDS = [
    MX("@", 1, "in1-smtp.messagingengine.com."),
	MX("@", 5, "in2-smtp.messagingengine.com."),
	SRV("_imaps._tcp", 0, 1, 993, "imap.fastmail.com."),
	SRV("_pop3s._tcp", 0, 1, 995, "pop.fastmail.com."),
	SRV("_submission._tcp", 0, 1, 567, "smtp.fastmail.com."),
]
var FASTMAIL_DKIM = function(domain){
    return [
        CNAME("fm1._domainkey", "fm1." + domain + ".dkim.fmhosted.com."),
        CNAME("fm2._domainkey", "fm2." + domain + ".dkim.fmhosted.com."),
        CNAME("fm3._domainkey", "fm3." + domain + ".dkim.fmhosted.com."),
    ]
}