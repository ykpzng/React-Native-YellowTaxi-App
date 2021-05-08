// Tip -1- sorgusu
// Bu fonksiyon alttaki api ye cevap vermektedir
// https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/denemeapi-urbqx/service/deneapi/incoming_webhook/tip1-s1

exports = function (payload) {
  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("yellowtaxidb").collection("tripdatas");
  return mycollection.aggregate([
    {
      "$match": {

      }
    },
    {
      "$group": {
        "_id": "$tpep_pickup_day",
        "totalPassenger": {
          "$sum": "$passenger_count"
        }
      }
    },
    {
      "$sort": {
        "totalPassenger": -1.0
      }
    },
    {
      "$limit": 5.0
    }

  ])

}



// Tip -2- sorgusu
// Bu fonksiyon alttaki api ye cevap vermektedir
// https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/denemeapi-urbqx/service/deneapi/incoming_webhook/tip2-s3

exports = function (payload, response) {

  var sonuc = {};
  sonuc = JSON.parse(payload.body.text());
  var start = sonuc.start;
  var end = sonuc.end;

  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("yellowtaxidb").collection("tripdatas");

  return mycollection.aggregate([
    {
      "$match": {
        "tpep_pickup_day": {
          "$gte": start,
          "$lte": end,
        },
        "trip_distance": {
          "$gt": 0.0
        }
      }
    },

    {
      "$lookup": {
        "from": "zones",
        "localField": "PULocationID",
        "foreignField": "LocationID",
        "as": "PU_Zone"
      }
    },
    {
      "$lookup": {
        "from": "zones",
        "localField": "DOLocationID",
        "foreignField": "LocationID",
        "as": "DO_Zone"
      }
    },
    {
      "$project": {
        "_id": 1.0,
        "trip_distance": 1.0,
        "PUBorough": "$PU_Zone.Borough",
        "PUZone": "$PU_Zone.Zone",
        "DOBorough": "$DO_Zone.Borough",
        "DOZone": "$DO_Zone.Zone"
      }
    },
    {
      "$sort": {
        "trip_distance": 1.0
      }
    },
    {
      "$limit": 5.0
    }

  ])
}

// Tip -3- sorgusu
// Bu fonksiyon alttaki api ye cevap vermektedir
// https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/denemeapi-urbqx/service/deneapi/incoming_webhook/tip3-s1


exports = function (payload, response) {
  var sonuc = {};
  sonuc = JSON.parse(payload.body.text());
  var day = sonuc.day;

  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("yellowtaxidb").collection("tripdatas");

  return mycollection.aggregate([
    {
      "$match": {
        "tpep_pickup_day": day
      }
    },
    {
      "$sort": {
        "trip_distance": -1.0
      }
    },
    {
      "$limit": 1.0
    },
    {
      "$lookup": {
        "from": "zones",
        "localField": "PULocationID",
        "foreignField": "LocationID",
        "as": "PU_Zone"
      }
    },
    {
      "$lookup": {
        "from": "zones",
        "localField": "DOLocationID",
        "foreignField": "LocationID",
        "as": "DO_Zone"
      }
    },
    {
      "$project": {
        "_id": 1.0,
        "trip_distance": 1.0,
        "PUBorough": "$PU_Zone.Borough",
        "PUZone": "$PU_Zone.Zone",
        "DOBorough": "$DO_Zone.Borough",
        "DOZone": "$DO_Zone.Zone"
      }
    }

  ])
}