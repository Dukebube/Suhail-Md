const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_25_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4LFxuICAgICAgICA3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk4LFxuICAgICAgICA5MixcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1bEQ1Mkd5dnliRDRyMElkdnF5dG80TlNMcy80R1Y0MVlVSXNtaXdjbVo0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNTkyNDA1NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMxQTc0RjYyODE4OEIwNTE0NDEwQzdFQjEyQzU1Qzc5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDg4NDMyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqdEtBYVlZZFMydTlBY1VQczljTDFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRkZmM4YjQyLTZhODUtNDE1Ni04MjcyLWZjOTA0OWQ5MTcwNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAyMjQsXG4gICAgICAyMTksXG4gICAgICA2NyxcbiAgICAgIDI0OSxcbiAgICAgIDE3OCxcbiAgICAgIDI1MCxcbiAgICAgIDkzLFxuICAgICAgMTI5LFxuICAgICAgMjI2LFxuICAgICAgMTc4LFxuICAgICAgMTkxLFxuICAgICAgMTY4LFxuICAgICAgMjM5LFxuICAgICAgMzYsXG4gICAgICAyNDMsXG4gICAgICAzNCxcbiAgICAgIDI0NixcbiAgICAgIDE2NSxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTQsXG4gICAgICAxMTgsXG4gICAgICAzOSxcbiAgICAgIDAsXG4gICAgICAxMDYsXG4gICAgICAyNDgsXG4gICAgICAzNyxcbiAgICAgIDIwMCxcbiAgICAgIDIxMixcbiAgICAgIDEwMyxcbiAgICAgIDE0NyxcbiAgICAgIDE4NyxcbiAgICAgIDg3LFxuICAgICAgMjEzLFxuICAgICAgMTI2LFxuICAgICAgMjQwLFxuICAgICAgMTg3LFxuICAgICAgMjAzLFxuICAgICAgNDMsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMldYR01KNExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNTkyNDA1NjI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ0NjAxOTEwODg3OTQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN2wvSXNGRU5tNHlyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZ3a0xPV29TNCtRQVUzTng3L1FnY3l0NzJSYk9Ya2RLVzY4U0lIYXpkU0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTS84dzcyNXpzL2lnelFaVktwejBwY0l0dWdwM3BHQXhIVVlWcDdTczJzVml2eHhBcUpRalA4WnNtVThoZFhNSExGaWhnSUdPT1YvdGRlOWRjZHRsQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSytxTnYrWGVXZXhHQ3l3ZTBxN1FBOHhTOHpSdFFaNlBLdW1leC9TMDlxSGlwRm1hTm9mTkFFY2VDdmtjME5xNUVuUFdPNmxkNGJNWTRtTi9kVEJnREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA1OTI0MDU2Mjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4ODQzMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQVlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBWUC5qc29uIjogIntcImtleURhdGFcIjpcInhOeUNaS1BWVFhTTmN2Z0dDQmlhSERxeWFyZTJ6ZTZKSDAzMW1wT2NRU1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2NzI5MDYxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
