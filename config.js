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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348053193652";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_16_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHL0JobzVCZHpYNldTVW50RGFFMHdrNmhvVjgyL0h2TWw2RitWWlA0MmE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTUXZlazBpd1RWbWJnaUtCdWVfZThRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhmYmVmYzYxLTBhYjgtNGNjMS04ZWU2LWFiNGY2YmU5ZTg0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyMTIsXG4gICAgICAyNTEsXG4gICAgICAxMzEsXG4gICAgICA4MixcbiAgICAgIDIzMyxcbiAgICAgIDI0NixcbiAgICAgIDIxOSxcbiAgICAgIDI0MyxcbiAgICAgIDk4LFxuICAgICAgMTg3LFxuICAgICAgMjUzLFxuICAgICAgMjQ3LFxuICAgICAgNTAsXG4gICAgICA0NyxcbiAgICAgIDEyNSxcbiAgICAgIDE3NyxcbiAgICAgIDg2LFxuICAgICAgMjM1LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAyMjQsXG4gICAgICAxNzYsXG4gICAgICAyNyxcbiAgICAgIDM2LFxuICAgICAgMTU1LFxuICAgICAgNjIsXG4gICAgICAzNyxcbiAgICAgIDEwNixcbiAgICAgIDgwLFxuICAgICAgMTExLFxuICAgICAgNDMsXG4gICAgICAxNTgsXG4gICAgICA1LFxuICAgICAgMTk3LFxuICAgICAgMjI1LFxuICAgICAgMTU3LFxuICAgICAgMTE5LFxuICAgICAgNDIsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDlMTUs5TkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNTMxOTM2NTI6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCZW5zb25cIixcbiAgICBcImxpZFwiOiBcIjIxNDAwMTA5MDgyNjQxMToyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUFJ3ZFFERUxhQjJyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1kU1VZZFNtNGJlR1hVekxsWVFyTXlBNVdmUTZTOHJ1OHVoaDN1SkJTU2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieHNBbUh4YmRNZURGVHZuUDd5QnFLbGt0Vm5TcSttenZleExOVTFJNncyV2hOd3IraEFqcjlPWDJhWHZuQUdOdGhyWlkyNE44R0hYUGNROXorRUkxRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSTkzN1JINmJCd0wyZlQ2NVk2cnZKQ0NDa3NHRndNN3RXcGx1R0pGdXVFUlJJd1BpOEF6dXNFYUNvdCtYUGRldUdVeThVenNuaUtxdFlMMkNPU2E0aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA1MzE5MzY1MjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMzkzODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFVWZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVVZi5qc29uIjogIntcImtleURhdGFcIjpcImIwa0ZCMTUxSUhqVEtvUmFZMGdxbmlsVFF5ZnBwdVVYbFNyVzd4OTM2NlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTgyNTQyNTc0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMTM3MDg4OTQ2XCJ9Igp9"  // PUT your SESSION_ID 


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
