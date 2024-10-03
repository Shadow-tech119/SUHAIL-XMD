const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349036080721";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_22_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUxLFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyLFxuICAgICAgICA3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkwLFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrSUprQ0plQ0R5bzZQZXd5SXh2OEFwd2dNMkVLVjZSbG4vNlZ2MzhFYXdZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNDEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNDEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiRFNxazZOZlFPS2J0ckpfQkg4QzJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBkNGU1NGU4LTZiZTgtNGQwZi04NzBiLWY0MDZlNWFjMmRjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDk4LFxuICAgICAgNTIsXG4gICAgICAxODIsXG4gICAgICAxODYsXG4gICAgICAxNzgsXG4gICAgICAyMyxcbiAgICAgIDEyMCxcbiAgICAgIDI0MCxcbiAgICAgIDE1NyxcbiAgICAgIDY2LFxuICAgICAgNzUsXG4gICAgICAyMjUsXG4gICAgICAxNDksXG4gICAgICA0LFxuICAgICAgMTEwLFxuICAgICAgMjUwLFxuICAgICAgMTEyLFxuICAgICAgMjI3LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDE3NyxcbiAgICAgIDIyMCxcbiAgICAgIDEzMSxcbiAgICAgIDE5NCxcbiAgICAgIDQ5LFxuICAgICAgMTM1LFxuICAgICAgMTYzLFxuICAgICAgMTE3LFxuICAgICAgMTY1LFxuICAgICAgMTAyLFxuICAgICAgMjUzLFxuICAgICAgNjIsXG4gICAgICAxNzUsXG4gICAgICA2NyxcbiAgICAgIDIsXG4gICAgICAxNjcsXG4gICAgICAyMzgsXG4gICAgICAyMjcsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFZNQkw4SFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzYwODA3MjE6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJIGFtIHNoYWRvd1wiLFxuICAgIFwibGlkXCI6IFwiNjU1OTMxMjY0NzM5NDQ6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHpaeUxJSEVQenYrTGNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsOWJuYkVEeXFwcnBINmo0dTNpYzFTRmpRRENNUHZ5YWJpZEFkTGlLakhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZGSGNCbjhkMG9oN2YwNVBPWWpUUHovWlF6U2RHbFpleEw1N2huTGFDRldYdE1ZWXpBdUdsOTlSeUpyby82TS9Td1NGdklVQzd5Z1JabVVLa05lcURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1JZ25FU2tnQ1EyajIxb1ppSEFTcllkeG1Qc1hHSkJpR2s4TkRYdWV3eVU1VkEwWHRlTnZqZEU3a0diSnpTT0VxZ2tTcXRMd3NrNEEzb1lOUG5BUUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzYwODA3MjE6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc5MzY1MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDTzdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNPNy5qc29uIjogIntcImtleURhdGFcIjpcIm5SS2s4OTVhTncvT25PbFNGcVRaN0tKOTZBUWJGRWVoMk4xN0JvUTBadWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4NTA5Njk1MyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
