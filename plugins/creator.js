const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;hyzer;;;'
                    + 'FN:hyzer\n' // full name
                    + 'ORG:Owner Shiro-Md;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282361160044:+6282361160044\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Hyzer', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
