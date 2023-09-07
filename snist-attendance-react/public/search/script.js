const data = {
  1: {
    lat: 17.455953613855996,
    lng: 78.66597712039948,
  },
  2: {
    lat: 17.455692627545062,
    lng: 78.6670795083046,
  },
  4: {
    lat: 17.455498166913493,
    lng: 78.66765215992928,
  },
  8: {
    lat: 17.45532673434248,
    lng: 78.66764545440672,
  },
  "1P": {
    lat: 17.4547561441757,
    lng: 78.66547286510468,
  },
  "1B": {
    lat: 17.45716131034895,
    lng: 78.66805851459503,
  },
  5: {
    lat: 17.45522182776426,
    lng: 78.6665028333664,
  },
  10: {
    lat: 17.457647457101128,
    lng: 78.66761326789856,
  },
  6: {
    lat: 17.457204807742773,
    lng: 78.6674228310585,
  },
};

function click(room) {
  let roomNo;
  console.log("RoomNo: ", room);

  try {
    roomNo = parseInt(room);
  } catch (error) {
    return {
      success: false,
      description: "RoomNo Not Found",
    };
  }

  let str = room.startsWith("31") ? "1P" : "-1";
  if (room.startsWith("13") && roomNo >= 13101 && roomNo <= 13116) {
    str = "1B";
  }
  if (
    room.startsWith("1") &&
    ((room.startsWith("11") && roomNo >= 1101 && roomNo <= 1114) ||
      (roomNo >= 1201 && roomNo <= 1214) ||
      (roomNo >= 1301 && roomNo <= 1320) ||
      (roomNo >= 1401 && roomNo <= 1415))
  ) {
    str = "1";
  }
  if (
    room.startsWith("2") &&
    ((room.startsWith("21") && roomNo >= 2101 && roomNo <= 2112) ||
      (roomNo >= 2201 && roomNo <= 2215) ||
      (roomNo >= 2301 && roomNo <= 2311) ||
      (roomNo >= 2401 && roomNo <= 2414))
  ) {
    str = "2";
  }
  if (
    room.startsWith("4") &&
    ((roomNo >= 4101 && roomNo <= 4112) ||
      roomNo === 4122 ||
      roomNo === 4124 ||
      roomNo === 4125 ||
      roomNo === 4128 ||
      (roomNo >= 4201 && roomNo <= 4215) ||
      (roomNo >= 4301 && roomNo <= 4315) ||
      (roomNo >= 4401 && roomNo <= 4415))
  ) {
    str = "4";
  }
  if (
    room.startsWith("8") &&
    ((roomNo >= 8101 && roomNo <= 8107) ||
      (roomNo >= 8201 && roomNo <= 8207) ||
      (roomNo >= 8301 && roomNo <= 8307) ||
      (roomNo >= 8401 && roomNo <= 8407))
  ) {
    str = "8";
  }
  if (
    room.startsWith("5") &&
    ((roomNo >= 5001 && roomNo <= 5008) ||
      (roomNo >= 5101 && roomNo <= 5103) ||
      (roomNo >= 5106 && roomNo <= 5113) ||
      (roomNo >= 5201 && roomNo <= 5211))
  ) {
    str = "5";
  }
  if (
    (room.startsWith("9") || room.startsWith("10") || room.startsWith("11")) &&
    ((roomNo >= 9101 && roomNo <= 9115) ||
      (roomNo >= 10101 && roomNo <= 10108) ||
      (roomNo >= 11101 && roomNo <= 11103))
  ) {
    str = "10";
  }
  if (room.startsWith("6") && roomNo >= 6001 && roomNo <= 6010) {
    str = "6";
  }

  try {
    return {
      success: true,
      description: "Room Found",
      data: {
        lat: data[str].lat,
        lng: data[str].lng,
      },
    };
  } catch (error) {
    return {
      success: false,
      description: "Room Not Found",
    };
  }
}

let pin = {
  lat: 17.455311025731557,
  lng: 78.66650219297004,
};

var map;

document.getElementById("search").addEventListener("click", function () {
  let room = document.getElementById("room").value;
  let result = click(room);
  if (result.success) {
    document.getElementById(
      "result"
    ).innerHTML = `Room Found at <br> Latitude: ${result.data.lat} <br> lnggitude: ${result.data.lng}`;

    var marker = new mappls.Marker({
      map: map,
      fitbounds: true,
      position: result.data,
    });
  } else {
    document.getElementById("result").innerHTML = result.description;
  }
});

window.onload = function () {
  map = new mappls.Map("map", {
    zoomControl: true,
    location: true,
    center: pin,
    zoom: 17.2,
    tilt: 65,
    zoomControl: false,
    fullscreenControl: false,
  });
};
