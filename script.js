const input = document.getElementById("input");
const button = document.getElementById("button");
const p = document.getElementById("demo");
const one = document.getElementById("one");

const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");

const nigeriaTime = new Date().toLocaleString("en-US", {
  timeZone: "Africa/Lagos",
});

const checkTime = (data) => {
  const currentHour = new Date(nigeriaTime).getHours();
  const currentMin = new Date(nigeriaTime).getMinutes();

  for (let key in data) {
    const [startHour, startMin] = key.split("-")[0].split(":").map(Number);
    const [endHour, endMin] = key.split("-")[1].split(":").map(Number);

    if (
      (currentHour > startHour ||
        (currentHour === startHour && currentMin >= startMin)) &&
      (currentHour < endHour ||
        (currentHour === endHour && currentMin <= endMin))
    ) {
      return (p.innerText = `you are Having   ${data[key]}`);
    }
  }

  return "No matching value found for the current time in Nigeria.";
};

button.addEventListener("click", () => {
  const regex = /sen|csc/gi;
  const result = input.value.toLowerCase().match(/csc|sen/);
  const aResult = input.value.toLowerCase().match(/21|20|22/);
  if (regex.test(input.value.toLowerCase().split(" "))) {
    const weekDay = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "aturday",
    ];
    const d = new Date();
    const day = weekDay[d.getDay()];
    const timeData = {
      21: {
        sen: {
          monday: {
            "06:00-7:00": "No Morning class",
            "07:00-08:00": "Afternoon",
            "08:00-09:00": "Evening",
            "10:00-11:00": "Night",
            "11:00-12:00": "No Morning class",
            "13:00-14:00": "Afternoon",
            "14:00-15:00": "Evening",
            "15:00-16:00": "Night",
            "16:00-17:00": "Afternoon",
            "17:00-18:00": "Evening",
            "15:00-16:00": "Night",
          },
          tuesday: {
            "06:00-12:00": "Morning",
            "12:00-18:00": "Afternoon",
            "18:00-00:00": "Evening",
            "20:00-22:00": "Night",
          },
          wednesday: {
            "06:00-7:00": "No Morning class",
            "07:00-08:00": "Afternoon",
            "08:00-09:00": "Evening",
            "10:00-11:00": "Night",
            "11:00-12:00": "No Morning class",
            "13:00-14:00": "Afternoon",
            "14:00-15:00": "cms at calt",
            "15:00-16:00": "Night",
            "16:00-17:00": "Afternoon",
            "17:00-18:00": "Evening",
            "15:00-16:00": "Night",
          },
          thursday: {
            "06:00-7:00": "No Morning class",
            "07:00-08:00": "Afternoon",
            "08:00-09:00": "Evening",
            "10:00-11:00": "Night",
            "11:00-12:00": "No Morning class",
            "13:00-14:00": "Afternoon",
            "14:00-15:00": "cms at calt",
            "15:00-16:00": "Night",
            "16:00-17:00": "Afternoon",
            "17:00-18:00": "Evening",
            "15:00-16:00": "Night",
          },
        },
        csc: {
          monday: {
            "06:00-12:00": "Morning",
            "12:00-18:00": "Afternoon",
            "18:00-00:00": "Evening",
            "00:00-06:00": "Night",
          },
          tuesday: {
            "06:00-12:00": "Morning",
            "12:00-18:00": "Afternoon",
            "18:00-00:00": "Evening",
            "20:00-22:00": "hello",
          },
          wednesday: {
            "06:00-12:00": "Morning",
            "12:00-18:00": "Afternoon",
            "18:00-00:00": "Evening",
            "00:00-06:00": "Night",
          },
          thursday: {
            "06:00-7:00": "No Morning class",
            "07:00-08:00": "Afternoon",
            "08:00-09:00": "Evening",
            "10:00-11:00": "Night",
            "11:00-12:00": "No Morning class",
            "13:00-14:00": "Afternoon",
            "14:00-15:00": "cms at calt",
            "15:00-16:00": "Night",
            "16:00-17:00": "Afternoon",
            "17:00-18:00": "Evening",
            "15:00-16:00": "Night",
            "16:00-17:00": "Night",
          },
        },
      },
      22: {
        sen: {
          monday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "SEn 208 at coccs networking lab",
            "09:00-10:00": "Evening",
            "10:00-11:00": "no class",
            "11:00-12:00": "mat 228 at nlt",
            "12:00-13:00": "Evening",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "gst 212D at nlt",
            "15:00-16:00": "gst 212D at nlt",
            "16:00-17:00": "No class",
            "17:00-18:00": "No class",
          },
          tuesday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "no class",
            "09:00-10:00": "sen 204 at coccs lect1",
            "10:00-11:00": "sen 204 at coccs lect1",
            "11:00-12:00": "no class",
            "12:00-13:00": "no class",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "mat 228 at las",
            "15:00-16:00": "no class",
            "16:00-17:00": "gst 228 at nlt",
            "17:00-18:00": "gst 228 at nlt",
          },
          wednesday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "gel202 at nlt",
            "09:00-10:00": "gel202 at nlt",
            "10:00-11:00": "chapel",
            "11:00-12:00": "chapel",
            "12:00-13:00": "Evening",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "sen 202 at coccs lectiii",
            "15:00-16:00": "no class",
            "16:00-17:00": "No class",
            "17:00-18:00": "No class",
             "18:00-24:00": "night time",
          },
          thursday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "sen 212 at coccs computer lab",
            "09:00-10:00": "sen 212 at coccs computer lab",
            "10:00-11:00": "no class",
            "11:00-12:00": "sen 206 at coccs networking lab",
            "12:00-13:00": "sen 206 at coccs networking lab",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "no class",
            "15:00-16:00": "no class",
            "16:00-17:00": "sen 210 at coccs networking lab",
            "17:00-18:00": "sen 210 at coccs networking lab",
          },
          friday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "no class",
            "09:00-10:00": "no class",
            "10:00-11:00": "no class",
            "11:00-12:00": "ees 202 at nlt",
            "12:00-13:00": "ees 202 at nlt",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "sen 202 at coccs networking lab",
            "15:00-16:00": "no class",
            "16:00-17:00": "no class",
            "17:00-18:00": "no class",
          },
        },
        csc: {
          monday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "csa 202 at las",
            "09:00-10:00": "csa 201 at newHorison",
            "10:00-11:00": "csa 201 at newHorison",
            "11:00-12:00": "csa 206 at las",
            "12:00-13:00": "csa 206 at las",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "gst 212D at nlt",
            "15:00-16:00": "gst 212D at nlt",
            "16:00-17:00": "No class",
            "17:00-18:00": "No class",
          },
          tuesday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "phy 204 at chem building3",
            "09:00-10:00": "phy 204 at chem building3",
            "10:00-11:00": "no class",
            "11:00-12:00": "csc 210 at coccs lab",
            "12:00-13:00": "csc 210 at coccs lab",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "csc 202/208 at coccs lab/calt",
            "15:00-16:00": "no class",
            "16:00-17:00": "gst 228 at nlt",
            "17:00-18:00": "no class",
          },
          wednesday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "gel 202 at nlt",
            "09:00-10:00": "no class",
            "10:00-11:00": "no class",
            "11:00-12:00": "no class",
            "12:00-13:00": "no class",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "no class",
            "15:00-16:00": "no class",
            "16:00-17:00": "No class",
            "17:00-18:00": "No class",
          },
          thursday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "No class",
            "09:00-10:00": "No class",
            "10:00-11:00": "no class",
            "11:00-12:00": "csc 208 at calt",
            "12:00-13:00": "csc 208 at calt",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "csc 202/208 at coccs lab/calt",
            "15:00-16:00": "csc 202/208 at coccs lab/calt",
            "16:00-17:00": "No class",
            "17:00-18:00": "No class",
          },
          friday: {
            "07:00-08:00": "no class",
            "08:00-09:00": "csc 206 at coccs lab",
            "09:00-10:00": "csc 206 at coccs lab",
            "10:00-11:00": "no class",
            "11:00-12:00": "ees 202 at nlt",
            "12:00-13:00": "No class",
            "13:00-14:00": "lunch break",
            "14:00-15:00": "No class",
            "15:00-16:00": "No class",
            "16:00-17:00": "No class",
            "17:00-18:00": "No class",
          },
        },
      },
    };

    if (timeData.hasOwnProperty(aResult)) {
      //console.log(timeData[aResult]);
      if (timeData[aResult].hasOwnProperty(result)) {
        if (timeData[aResult][result].hasOwnProperty(day)) {
          console.log(timeData[aResult][result][day]["06:00-12:00"]);
          checkTime(timeData[aResult][result][day]);
          one.textContent = `${timeData[aResult][result][day]["07:00-08:00"]}`;
          two.textContent = `${timeData[aResult][result][day]["08:00-09:00"]}`;
          three.textContent = `${timeData[aResult][result][day]["09:00-10:00"]}`;
          four.textContent = `${timeData[aResult][result][day]["10:00-11:00"]}`;
          five.textContent = `${timeData[aResult][result][day]["11:00-12:00"]}`;
          six.textContent = `${timeData[aResult][result][day]["12:00-13:00"]}`;
          seven.textContent = `${timeData[aResult][result][day]["13:00-14:00"]}`;
          eight.textContent = `${timeData[aResult][result][day]["14:00-15:00"]}`;
          nine.textContent = `${timeData[aResult][result][day]["15:00-16:00"]}`;
          ten.textContent = `${timeData[aResult][result][day]["16:00-17:00"]}`;
          eleven.textContent = `${timeData[aResult][result][day]["17:00-18:00"]}`;
        } else {
          alert("day not found");
        }
      } else {
        alert("fff");
      }
    } else {
      alert("no data for the matric-no found ,contact me to add");
    }
  } else {
    alert("no data for the matric-no found ,contact me to add");
  }
  input.value = "";
});
