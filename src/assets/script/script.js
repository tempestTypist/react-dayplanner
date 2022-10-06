let today = [
	{
		id: "0",
		hour: "12",
		time: "00",
		ampm: "am",
		reminder: ""
	},
	{
		id: "1",
		hour: "1",
		time: "01",
		ampm: "am",
		reminder: ""
	},
	{
		id: "2",
		hour: "2",
		time: "02",
		ampm: "am",
		reminder: ""
	},
	{
		id: "3",
		hour: "3",
		time: "03",
		ampm: "am",
		reminder: ""
	},
	{
		id: "4",
		hour: "4",
		time: "04",
		ampm: "am",
		reminder: ""
	},
	{
		id: "5",
		hour: "5",
		time: "05",
		ampm: "am",
		reminder: ""
	},
	{
		id: "6",
		hour: "6",
		time: "06",
		ampm: "am",
		reminder: ""
	},
	{
		id: "7",
		hour: "7",
		time: "07",
		ampm: "am",
		reminder: ""
	},
	{
		id: "8",
		hour: "8",
		time: "08",
		ampm: "am",
		reminder: ""
	},
	{
		id: "9",
		hour: "9",
		time: "09",
		ampm: "am",
		reminder: ""
	},
	{
			id: "10",
			hour: "10",
			time: "10",
			ampm: "am",
			reminder: ""
	},
	{
			id: "11",
			hour: "11",
			time: "11",
			ampm: "am",
			reminder: ""
	},
	{
			id: "12",
			hour: "12",
			time: "12",
			ampm: "pm",
			reminder: ""
	},
	{
			id: "13",
			hour: "1",
			time: "13",
			ampm: "pm",
			reminder: ""
	},
	{
			id: "14",
			hour: "2",
			time: "14",
			ampm: "pm",
			reminder: ""
	},
	{
			id: "15",
			hour: "3",
			time: "15",
			ampm: "pm",
			reminder: ""
	},
	{
			id: "16",
			hour: "4",
			time: "16",
			ampm: "pm",
			reminder: ""
	},
	{
			id: "17",
			hour: "5",
			time: "17",
			ampm: "pm",
			reminder: ""
	},
	{
		id: "18",
		hour: "6",
		time: "18",
		ampm: "pm",
		reminder: ""
	},
	{
		id: "19",
		hour: "7",
		time: "19",
		ampm: "pm",
		reminder: ""
	},
	{
		id: "20",
		hour: "8",
		time: "20",
		ampm: "pm",
		reminder: ""
	},
	{
		id: "21",
		hour: "9",
		time: "21",
		ampm: "pm",
		reminder: ""
	},
	{
		id: "22",
		hour: "10",
		time: "22",
		ampm: "pm",
		reminder: ""
	},
	{
		id: "23",
		hour: "11",
		time: "23",
		ampm: "pm",
		reminder: ""
	}
]

function setHeaderDate() {
	let headerDate = moment().format("MMM Do, YYYY");
	$("#currentDay").text(headerDate);
}

setHeaderDate();

$.each(today, function(saveIndex, HH) {

	let timeblock = $("<form>").attr({"class": "row timeblock-row"});
	$(".dayplanner-container").append(timeblock);

	let hourCol = $("<div>");
			hourCol.text(`${HH.hour}${HH.ampm}`);
			hourCol.attr({"class": "col-2 hour text-center pt-4"});

	let noteCol = $("<div>");
			noteCol.attr({"class": "col-9 description p-0"});

	let noteInput = $("<textarea>");
	
	noteCol.append(noteInput);
	noteInput.attr("id", HH.id);
	
	if (HH.time < moment().format("HH")) {
			noteInput.attr({"class": "past",})
	} else if (HH.time === moment().format("HH")) {
			noteInput.attr({"class": "present"})
	} else if (HH.time > moment().format("HH")) {
			noteInput.attr({"class": "future"})
	}

	let saveBtn = $("<i class='far fa-save fa-lg'></i>");
	let saveCol = $("<button>").attr({"class": "col-1 saveBtn"});
	
	saveCol.append(saveBtn);
	timeblock.append(hourCol, noteCol, saveCol);
})

function saveDay() {
	localStorage.setItem("today", JSON.stringify(today));
}

function showDay() {
	$.each(today, function (saveIndex, TB) {
			$(`#${TB.id}`).val(TB.reminder);
	})
}

function init() {
	let storedDay = JSON.parse(localStorage.getItem("today"));

	if (storedDay) {
			today = storedDay;
	}

	saveDay();
	showDay();
}

init();

//prevent user from scheduling events in the past or present
$(".saveBtn").on("click", function(event) {
	event.preventDefault();

	let futureminder = $(this).siblings(".description").children(".future");
	let saveIndex = futureminder.attr("id");
	today[saveIndex].reminder = futureminder.val();

	saveDay();
	showDay();
})