module.exports = {
  mongo: {
      "host": process.env.MONGOHOST || "bpms.everteam.us",
      "port": process.env.MONGOPORT || 27017,
      "url": process.env.MONGOURL || "mongodb://bpms.everteam.us/launchpoint",
      "database": process.env.MONGODB || "launchpoint",
      "connector": "mongodb"
    }
}
