const seatingArea = document.getElementById('seatingArea');
const floor1Button = document.getElementById('floor1Button');
const floor2Button = document.getElementById('floor2Button');
const saveButton = document.getElementById('saveButton');
const editButton = document.getElementById('editButton');
const stage = document.getElementById('stage'); // 무대
const resetButton = document.createElement('button'); // 초기화 버튼
const floorInfo = document.getElementById('floorInfo');

const preserveButton = document.getElementById('preserveButton');
let preserveMode = false; // 특정 좌석 유지 모드 활성화 여부

resetButton.textContent = "초기화";
resetButton.className = "reset-button";
document.body.appendChild(resetButton); // 초기화 버튼 추가


// 좌석 데이터
const floor1Seats = [
    //★★★★★★ 좌석 A★★★★★★★★
    { id: "A-20", row: "A", number: 20, x: 1, y: 5, status: "available" },
    { id: "A-19", row: "A", number: 19, x: 1, y: 6, status: "available" },
    { id: "A-18", row: "A", number: 18, x: 1, y: 7, status: "available" },
    { id: "A-17", row: "A", number: 17, x: 1, y: 8, status: "available" },
    { id: "A-16", row: "A", number: 16, x: 1, y: 9, status: "available" },
    { id: "A-15", row: "A", number: 15, x: 1, y: 10, status: "available" },
    { id: "A-14", row: "A", number: 14, x: 1, y: 11, status: "available" },

    { id: "A-13", row: "A", number: 13, x: 2, y: 7, status: "available" },
    { id: "A-12", row: "A", number: 12, x: 2, y: 8, status: "available" },
    { id: "A-11", row: "A", number: 11, x: 2, y: 9, status: "available" },
    { id: "A-10", row: "A", number: 10, x: 2, y: 10, status: "available" },
    { id: "A-9", row: "A", number: 9, x: 2, y: 11, status: "available" },
    { id: "A-8", row: "A", number: 8, x: 2, y: 12, status: "available" },
    { id: "A-7", row: "A", number: 7, x: 3, y: 8, status: "available" },
    { id: "A-6", row: "A", number: 6, x: 3, y: 9, status: "available" },
    { id: "A-5", row: "A", number: 5, x: 3, y: 10, status: "available" },
    { id: "A-4", row: "A", number: 4, x: 3, y: 11, status: "available" },
    { id: "A-3", row: "A", number: 3, x: 3, y: 12, status: "available" },
    { id: "A-2", row: "A", number: 2, x: 3, y: 13, status: "available" },
    { id: "A-1", row: "A", number: 1, x: 3, y: 14, status: "available" },

    //★★★★★★ 좌석 B★★★★★★★★
    { id: "B-12", row: "B", number: 12, x: 1, y: 2, status: "available" },
    { id: "B-13", row: "B", number: 13, x: 2, y: 2, status: "available" },
    { id: "B-14", row: "B", number: 14, x: 3, y: 2, status: "available" },
    { id: "B-15", row: "B", number: 15, x: 4, y: 2, status: "available" },
    { id: "B-16", row: "B", number: 16, x: 5, y: 2, status: "available" },
    { id: "B-17", row: "B", number: 17, x: 6, y: 2, status: "available" },

    { id: "B-7", row: "B", number: 7, x: 2, y: 3, status: "available" },
    { id: "B-8", row: "B", number: 8, x: 3, y: 3, status: "available" },
    { id: "B-9", row: "B", number: 9, x: 4, y: 3, status: "available" },
    { id: "B-10", row: "B", number: 10, x: 5, y: 3, status: "available" },
    { id: "B-11", row: "B", number: 11, x: 6, y: 3, status: "available" },

    { id: "B-3", row: "B", number: 3, x: 3, y: 4, status: "available" },
    { id: "B-4", row: "B", number: 4, x: 4, y: 4, status: "available" },
    { id: "B-5", row: "B", number: 5, x: 5, y: 4, status: "available" },
    { id: "B-6", row: "B", number: 6, x: 6, y: 4, status: "available" },

    { id: "B-1", row: "B", number: 1, x: 5, y: 5, status: "available" },
    { id: "B-2", row: "B", number: 2, x: 6, y: 5, status: "available" },

    //★★★★★★ 좌석 C★★★★★★★★
    { id: "C-41", row: "C", number: 41, x: 13, y: 1, status: "available" },
    { id: "C-42", row: "C", number: 42, x: 14, y: 1, status: "available" },
    { id: "C-43", row: "C", number: 43, x: 15, y: 1, status: "available" },

    { id: "C-33", row: "C", number: 33, x: 8, y: 2, status: "available" },
    { id: "C-34", row: "C", number: 34, x: 9, y: 2, status: "available" },
    { id: "C-35", row: "C", number: 35, x: 10, y: 2, status: "available" },
    { id: "C-36", row: "C", number: 36, x: 11, y: 2, status: "available" },
    { id: "C-37", row: "C", number: 37, x: 12, y: 2, status: "available" },
    { id: "C-38", row: "C", number: 38, x: 13, y: 2, status: "available" },
    { id: "C-39", row: "C", number: 39, x: 14, y: 2, status: "available" },
    { id: "C-40", row: "C", number: 40, x: 15, y: 2, status: "available" },

    { id: "C-25", row: "C", number: 25, x: 8, y: 3, status: "available" },
    { id: "C-26", row: "C", number: 26, x: 9, y: 3, status: "available" },
    { id: "C-27", row: "C", number: 27, x: 10, y: 3, status: "available" },
    { id: "C-28", row: "C", number: 28, x: 11, y: 3, status: "available" },
    { id: "C-29", row: "C", number: 29, x: 12, y: 3, status: "available" },
    { id: "C-30", row: "C", number: 30, x: 13, y: 3, status: "available" },
    { id: "C-31", row: "C", number: 31, x: 14, y: 3, status: "available" },
    { id: "C-32", row: "C", number: 32, x: 15, y: 3, status: "available" },

    { id: "C-17", row: "C", number: 17, x: 8, y: 4, status: "available" },
    { id: "C-18", row: "C", number: 18, x: 9, y: 4, status: "available" },
    { id: "C-19", row: "C", number: 19, x: 10, y: 4, status: "available" },
    { id: "C-20", row: "C", number: 20, x: 11, y: 4, status: "available" },
    { id: "C-21", row: "C", number: 21, x: 12, y: 4, status: "available" },
    { id: "C-22", row: "C", number: 22, x: 13, y: 4, status: "available" },
    { id: "C-23", row: "C", number: 23, x: 14, y: 4, status: "available" },
    { id: "C-24", row: "C", number: 24, x: 15, y: 4, status: "available" },

    { id: "C-9", row: "C", number: 9, x: 8, y: 5, status: "available" },
    { id: "C-10", row: "C", number: 10, x: 9, y: 5, status: "available" },
    { id: "C-11", row: "C", number: 11, x: 10, y: 5, status: "available" },
    { id: "C-12", row: "C", number: 12, x: 11, y: 5, status: "available" },
    { id: "C-13", row: "C", number: 13, x: 12, y: 5, status: "available" },
    { id: "C-14", row: "C", number: 14, x: 13, y: 5, status: "available" },
    { id: "C-15", row: "C", number: 15, x: 14, y: 5, status: "available" },
    { id: "C-16", row: "C", number: 16, x: 15, y: 5, status: "available" },

    { id: "C-1", row: "C", number: 1, x: 8, y: 6, status: "available" },
    { id: "C-2", row: "C", number: 2, x: 9, y: 6, status: "available" },
    { id: "C-3", row: "C", number: 3, x: 10, y: 6, status: "available" },
    { id: "C-4", row: "C", number: 4, x: 11, y: 6, status: "available" },
    { id: "C-5", row: "C", number: 5, x: 12, y: 6, status: "available" },
    { id: "C-6", row: "C", number: 6, x: 13, y: 6, status: "available" },
    { id: "C-7", row: "C", number: 7, x: 14, y: 6, status: "available" },
    { id: "C-8", row: "C", number: 8, x: 15, y: 6, status: "available" },

    //★★★★★★ 좌석 D★★★★★★★★
    { id: "D-41", row: "D", number: 41, x: 17, y: 1, status: "available" },
    { id: "D-42", row: "D", number: 42, x: 18, y: 1, status: "available" },
    { id: "D-43", row: "D", number: 43, x: 19, y: 1, status: "available" },

    { id: "D-33", row: "D", number: 33, x: 17, y: 2, status: "available" },
    { id: "D-34", row: "D", number: 34, x: 18, y: 2, status: "available" },
    { id: "D-35", row: "D", number: 35, x: 19, y: 2, status: "available" },
    { id: "D-36", row: "D", number: 36, x: 20, y: 2, status: "available" },
    { id: "D-37", row: "D", number: 37, x: 21, y: 2, status: "available" },
    { id: "D-38", row: "D", number: 38, x: 22, y: 2, status: "available" },
    { id: "D-39", row: "D", number: 39, x: 23, y: 2, status: "available" },
    { id: "D-40", row: "D", number: 40, x: 24, y: 2, status: "available" },

    { id: "D-25", row: "D", number: 25, x: 17, y: 3, status: "available" },
    { id: "D-26", row: "D", number: 26, x: 18, y: 3, status: "available" },
    { id: "D-27", row: "D", number: 27, x: 19, y: 3, status: "available" },
    { id: "D-28", row: "D", number: 28, x: 20, y: 3, status: "available" },
    { id: "D-29", row: "D", number: 29, x: 21, y: 3, status: "available" },
    { id: "D-30", row: "D", number: 30, x: 22, y: 3, status: "available" },
    { id: "D-31", row: "D", number: 31, x: 23, y: 3, status: "available" },
    { id: "D-32", row: "D", number: 32, x: 24, y: 3, status: "available" },

    { id: "D-17", row: "D", number: 17, x: 17, y: 4, status: "available" },
    { id: "D-18", row: "D", number: 18, x: 18, y: 4, status: "available" },
    { id: "D-19", row: "D", number: 19, x: 19, y: 4, status: "available" },
    { id: "D-20", row: "D", number: 20, x: 20, y: 4, status: "available" },
    { id: "D-21", row: "D", number: 21, x: 21, y: 4, status: "available" },
    { id: "D-22", row: "D", number: 22, x: 22, y: 4, status: "available" },
    { id: "D-23", row: "D", number: 23, x: 23, y: 4, status: "available" },
    { id: "D-24", row: "D", number: 24, x: 24, y: 4, status: "available" },

    { id: "D-9", row: "D", number: 9, x: 17, y: 5, status: "available" },
    { id: "D-10", row: "D", number: 10, x: 18, y: 5, status: "available" },
    { id: "D-11", row: "D", number: 11, x: 19, y: 5, status: "available" },
    { id: "D-12", row: "D", number: 12, x: 20, y: 5, status: "available" },
    { id: "D-13", row: "D", number: 13, x: 21, y: 5, status: "available" },
    { id: "D-14", row: "D", number: 14, x: 22, y: 5, status: "available" },
    { id: "D-15", row: "D", number: 15, x: 23, y: 5, status: "available" },
    { id: "D-16", row: "D", number: 16, x: 24, y: 5, status: "available" },

    { id: "D-1", row: "D", number: 1, x: 17, y: 6, status: "available" },
    { id: "D-2", row: "D", number: 2, x: 18, y: 6, status: "available" },
    { id: "D-3", row: "D", number: 3, x: 19, y: 6, status: "available" },
    { id: "D-4", row: "D", number: 4, x: 20, y: 6, status: "available" },
    { id: "D-5", row: "D", number: 5, x: 21, y: 6, status: "available" },
    { id: "D-6", row: "D", number: 6, x: 22, y: 6, status: "available" },
    { id: "D-7", row: "D", number: 7, x: 23, y: 6, status: "available" },
    { id: "D-8", row: "D", number: 8, x: 24, y: 6, status: "available" },

    //★★★★★★ 좌석 E ★★★★★★★★
    { id: "E-12", row: "E", number: 12, x: 26, y: 2, status: "available" },
    { id: "E-13", row: "E", number: 13, x: 27, y: 2, status: "available" },
    { id: "E-14", row: "E", number: 14, x: 28, y: 2, status: "available" },
    { id: "E-15", row: "E", number: 15, x: 29, y: 2, status: "available" },
    { id: "E-16", row: "E", number: 16, x: 30, y: 2, status: "available" },
    { id: "E-17", row: "E", number: 17, x: 31, y: 2, status: "available" },

    { id: "E-7", row: "E", number: 7, x: 26, y: 3, status: "available" },
    { id: "E-8", row: "E", number: 8, x: 27, y: 3, status: "available" },
    { id: "E-9", row: "E", number: 9, x: 28, y: 3, status: "available" },
    { id: "E-10", row: "E", number: 10, x: 29, y: 3, status: "available" },
    { id: "E-11", row: "E", number: 11, x: 30, y: 3, status: "available" },

    { id: "E-3", row: "E", number: 3, x: 26, y: 4, status: "available" },
    { id: "E-4", row: "E", number: 4, x: 27, y: 4, status: "available" },
    { id: "E-5", row: "E", number: 5, x: 28, y: 4, status: "available" },
    { id: "E-6", row: "E", number: 6, x: 29, y: 4, status: "available" },

    { id: "E-1", row: "E", number: 1, x: 26, y: 5, status: "available" },
    { id: "E-2", row: "E", number: 2, x: 27, y: 5, status: "available" },

    //★★★★★★ 좌석 F ★★★★★★★★
    { id: "F-14", row: "F", number: 14, x: 31, y: 5, status: "available" },
    { id: "F-15", row: "F", number: 15, x: 31, y: 6, status: "available" },
    { id: "F-16", row: "F", number: 16, x: 31, y: 7, status: "available" },
    { id: "F-17", row: "F", number: 17, x: 31, y: 8, status: "available" },
    { id: "F-18", row: "F", number: 18, x: 31, y: 9, status: "available" },
    { id: "F-19", row: "F", number: 19, x: 31, y: 10, status: "available" },
    { id: "F-20", row: "F", number: 20, x: 31, y: 11, status: "available" },

    { id: "F-8", row: "F", number: 8, x: 30, y: 7, status: "available" },
    { id: "F-9", row: "F", number: 9, x: 30, y: 8, status: "available" },
    { id: "F-10", row: "F", number: 10, x: 30, y: 9, status: "available" },
    { id: "F-11", row: "F", number: 11, x: 30, y: 10, status: "available" },
    { id: "F-12", row: "F", number: 12, x: 30, y: 11, status: "available" },
    { id: "F-13", row: "F", number: 13, x: 30, y: 12, status: "available" },

    { id: "F-1", row: "F", number: 1, x: 29, y: 8, status: "available" },
    { id: "F-2", row: "F", number: 2, x: 29, y: 9, status: "available" },
    { id: "F-3", row: "F", number: 3, x: 29, y: 10, status: "available" },
    { id: "F-4", row: "F", number: 4, x: 29, y: 11, status: "available" },
    { id: "F-5", row: "F", number: 5, x: 29, y: 12, status: "available" },

    { id: "F-6", row: "F", number: 6, x: 29, y: 13, status: "available" },
    { id: "F-7", row: "F", number: 7, x: 29, y: 14, status: "available" },



];

const floor2Seats = [
     //★★★★★★ 좌석 G★★★★★★★★
    { id: "G-27", row: "G", number: 27, x: 2, y: 1, status: "available" },
    { id: "G-28", row: "G", number: 28, x: 3, y: 1, status: "available" },
    { id: "G-29", row: "G", number: 29, x: 4, y: 1, status: "available" },
    { id: "G-30", row: "G", number: 30, x: 5, y: 1, status: "available" },
    { id: "G-31", row: "G", number: 31, x: 6, y: 1, status: "available" },
    { id: "G-32", row: "G", number: 32, x: 7, y: 1, status: "available" },

    { id: "G-21", row: "G", number: 21, x: 2, y: 2, status: "available" },
    { id: "G-22", row: "G", number: 22, x: 3, y: 2, status: "available" },
    { id: "G-23", row: "G", number: 23, x: 4, y: 2, status: "available" },
    { id: "G-24", row: "G", number: 24, x: 5, y: 2, status: "available" },
    { id: "G-25", row: "G", number: 25, x: 6, y: 2, status: "available" },
    { id: "G-26", row: "G", number: 26, x: 7, y: 2, status: "available" },

    { id: "G-15", row: "G", number: 15, x: 2, y: 3, status: "available" },
    { id: "G-16", row: "G", number: 16, x: 3, y: 3, status: "available" },
    { id: "G-17", row: "G", number: 17, x: 4, y: 3, status: "available" },
    { id: "G-18", row: "G", number: 18, x: 5, y: 3, status: "available" },
    { id: "G-19", row: "G", number: 19, x: 6, y: 3, status: "available" },
    { id: "G-20", row: "G", number: 20, x: 7, y: 3, status: "available" },

    { id: "G-8", row: "G", number: 8, x: 1, y: 4, status: "available" },
    { id: "G-9", row: "G", number: 9, x: 2, y: 4, status: "available" },
    { id: "G-10", row: "G", number: 10, x: 3, y: 4, status: "available" },
    { id: "G-11", row: "G", number: 11, x: 4, y: 4, status: "available" },
    { id: "G-12", row: "G", number: 12, x: 5, y: 4, status: "available" },
    { id: "G-13", row: "G", number: 13, x: 6, y: 4, status: "available" },
    { id: "G-14", row: "G", number: 14, x: 7, y: 4, status: "available" },

    { id: "G-1", row: "G", number: 1, x: 1, y: 5, status: "available" },
    { id: "G-2", row: "G", number: 2, x: 2, y: 5, status: "available" },
    { id: "G-3", row: "G", number: 3, x: 3, y: 5, status: "available" },
    { id: "G-4", row: "G", number: 4, x: 4, y: 5, status: "available" },
    { id: "G-5", row: "G", number: 5, x: 5, y: 5, status: "available" },
    { id: "G-6", row: "G", number: 6, x: 6, y: 5, status: "available" },
    { id: "G-7", row: "G", number: 7, x: 7, y: 5, status: "available" },

     //★★★★★★ 좌석 H★★★★★★★★
     { id: "H-17", row: "H", number: 17, x: 11, y: 3, status: "available" },
     { id: "H-18", row: "H", number: 18, x: 12, y: 3, status: "available" },
     { id: "H-19", row: "H", number: 19, x: 13, y: 3, status: "available" },
     { id: "H-20", row: "H", number: 20, x: 14, y: 3, status: "available" },
     { id: "H-21", row: "H", number: 21, x: 15, y: 3, status: "available" },
     { id: "H-22", row: "H", number: 22, x: 16, y: 3, status: "available" },

     { id: "H-9", row: "H", number: 9, x: 9, y: 4, status: "available" },
     { id: "H-10", row: "H", number: 10, x: 10, y: 4, status: "available" },
     { id: "H-11", row: "H", number: 11, x: 11, y: 4, status: "available" },
     { id: "H-12", row: "H", number: 12, x: 12, y: 4, status: "available" },
     { id: "H-13", row: "H", number: 13, x: 13, y: 4, status: "available" },
     { id: "H-14", row: "H", number: 14, x: 14, y: 4, status: "available" },
     { id: "H-15", row: "H", number: 15, x: 15, y: 4, status: "available" },
     { id: "H-16", row: "H", number: 16, x: 16, y: 4, status: "available" },
 
     { id: "H-1", row: "H", number: 1, x: 9, y: 5, status: "available" },
     { id: "H-2", row: "H", number: 2, x: 10, y: 5, status: "available" },
     { id: "H-3", row: "H", number: 3, x: 11, y: 5, status: "available" },
     { id: "H-4", row: "H", number: 4, x: 12, y: 5, status: "available" },
     { id: "H-5", row: "H", number: 5, x: 13, y: 5, status: "available" },
     { id: "H-6", row: "H", number: 6, x: 14, y: 5, status: "available" },
     { id: "H-7", row: "H", number: 7, x: 15, y: 5, status: "available" },
     { id: "H-8", row: "H", number: 8, x: 16, y: 5, status: "available" },

     //★★★★★★ 좌석 I★★★★★★★★
     { id: "I-1", row: "I", number: 1, x: 18, y: 5, status: "available" },
     { id: "I-2", row: "I", number: 2, x: 19, y: 5, status: "available" },
     { id: "I-3", row: "I", number: 3, x: 20, y: 5, status: "available" },
     { id: "I-4", row: "I", number: 4, x: 21, y: 5, status: "available" },
     { id: "I-5", row: "I", number: 5, x: 22, y: 5, status: "available" },
     { id: "I-6", row: "I", number: 6, x: 23, y: 5, status: "available" },
     { id: "I-7", row: "I", number: 7, x: 24, y: 5, status: "available" },
     { id: "I-8", row: "I", number: 8, x: 25, y: 5, status: "available" },

    { id: "I-9", row: "I", number: 9, x: 18, y: 4, status: "available" },
    { id: "I-10", row: "I", number: 10, x: 19, y: 4, status: "available" },
    { id: "I-11", row: "I", number: 11, x: 20, y: 4, status: "available" },
    { id: "I-12", row: "I", number: 12, x: 21, y: 4, status: "available" },
    { id: "I-13", row: "I", number: 13, x: 22, y: 4, status: "available" },
    { id: "I-14", row: "I", number: 14, x: 23, y: 4, status: "available" },
    { id: "I-15", row: "I", number: 15, x: 24, y: 4, status: "available" },
    { id: "I-16", row: "I", number: 16, x: 25, y: 4, status: "available" },

    { id: "I-17", row: "I", number: 17, x: 18, y: 3, status: "available" },
    { id: "I-18", row: "I", number: 18, x: 19, y: 3, status: "available" },
    { id: "I-19", row: "I", number: 19, x: 20, y: 3, status: "available" },
    { id: "I-20", row: "I", number: 20, x: 21, y: 3, status: "available" },
    { id: "I-21", row: "I", number: 21, x: 22, y: 3, status: "available" },
    { id: "I-22", row: "I", number: 22, x: 23, y: 3, status: "available" },

    //★★★★★★ 좌석 J★★★★★★★★
    { id: "J-1", row: "J", number: 1, x: 27, y: 5, status: "available" },
    { id: "J-2", row: "J", number: 2, x: 28, y: 5, status: "available" },
    { id: "J-3", row: "J", number: 3, x: 29, y: 5, status: "available" },
    { id: "J-4", row: "J", number: 4, x: 30, y: 5, status: "available" },
    { id: "J-5", row: "J", number: 5, x: 31, y: 5, status: "available" },
    { id: "J-6", row: "J", number: 6, x: 32, y: 5, status: "available" },
    { id: "J-7", row: "J", number: 7, x: 33, y: 5, status: "available" },

    { id: "J-8", row: "J", number: 8, x: 27, y: 4, status: "available" },
    { id: "J-9", row: "J", number: 9, x: 28, y: 4, status: "available" },
    { id: "J-10", row: "J", number: 10, x: 29, y: 4, status: "available" },
    { id: "J-11", row: "J", number: 11, x: 30, y: 4, status: "available" },
    { id: "J-12", row: "J", number: 12, x: 31, y: 4, status: "available" },
    { id: "J-13", row: "J", number: 13, x: 32, y: 4, status: "available" },
    { id: "J-14", row: "J", number: 14, x: 33, y: 4, status: "available" },

    { id: "J-15", row: "J", number: 15, x: 27, y: 3, status: "available" },
    { id: "J-16", row: "J", number: 16, x: 28, y: 3, status: "available" },
    { id: "J-17", row: "J", number: 17, x: 29, y: 3, status: "available" },
    { id: "J-18", row: "J", number: 18, x: 30, y: 3, status: "available" },
    { id: "J-19", row: "J", number: 19, x: 31, y: 3, status: "available" },
    { id: "J-20", row: "J", number: 20, x: 32, y: 3, status: "available" },

    { id: "J-21", row: "J", number: 21, x: 27, y: 2, status: "available" },
    { id: "J-22", row: "J", number: 22, x: 28, y: 2, status: "available" },
    { id: "J-23", row: "J", number: 23, x: 29, y: 2, status: "available" },
    { id: "J-24", row: "J", number: 24, x: 30, y: 2, status: "available" },
    { id: "J-25", row: "J", number: 25, x: 31, y: 2, status: "available" },
    { id: "J-26", row: "J", number: 26, x: 32, y: 2, status: "available" },

    { id: "J-27", row: "J", number: 27, x: 27, y: 1, status: "available" },
    { id: "J-28", row: "J", number: 28, x: 28, y: 1, status: "available" },
    { id: "J-29", row: "J", number: 29, x: 29, y: 1, status: "available" },
    { id: "J-30", row: "J", number: 30, x: 30, y: 1, status: "available" },
    { id: "J-31", row: "J", number: 31, x: 31, y: 1, status: "available" },
    { id: "J-32", row: "J", number: 32, x: 32, y: 1, status: "available" },
];


let currentFloor = "floor1"; // 현재 층
let seats = JSON.parse(localStorage.getItem(currentFloor)) || []; // 저장된 좌석 상태 로드
let modifyMode = false; // 수정 모드 활성화 여부

// 로컬 스토리지에 저장
function saveToLocalStorage() {
    localStorage.setItem(currentFloor, JSON.stringify(seats));
}

// 특정 좌석 유지 모드 활성화/비활성화
preserveButton.addEventListener('click', () => {
    preserveMode = !preserveMode;
    alert(preserveMode ? "특정 좌석을 선택해주세요." : "특정 좌석 유지 모드가 종료되었습니다.");
});

// 좌석 렌더링 함수
function renderSeats() {
    const seatingArea = document.getElementById('seatingArea');
    seatingArea.innerHTML = ''; // 기존 좌석 초기화

    seats.forEach((seat) => {
        const seatElement = document.createElement('div');
        seatElement.classList.add('seat');
        seatElement.dataset.id = seat.id;
        seatElement.style.gridColumn = seat.x; // x 좌표
        seatElement.style.gridRow = seat.y;    // y 좌표

       // 상태에 따라 클래스 추가
        if (seat.status === 'selected') {
            seatElement.classList.add('selected'); // 파란색
        } else if (seat.status === 'locked') {
            seatElement.classList.add('locked'); // 빨간색
        } else if (seat.status === 'preserved') {
            seatElement.classList.add('preserved'); // 녹색
        } else {
            seatElement.classList.add('available'); // 빈 좌석
        }

        // 좌석 번호 표시
        const seatNumber = document.createElement('span');
        seatNumber.textContent = `${seat.row}-${seat.number}`;
        seatElement.appendChild(seatNumber);

        // 좌석 클릭 이벤트
        seatElement.addEventListener('click', () => {
            if (preserveMode) {
                // 특정 좌석 유지 모드: preserved 상태로 전환
                if (seat.status === 'preserved') {
                    seat.status = 'available'; // 해제
                    seatElement.classList.remove('preserved');
                } else {
                    seat.status = 'preserved'; // 특정 좌석 유지
                    seatElement.classList.add('preserved');
                }
            } else if (modifyMode) {
                // 수정 모드: locked 상태만 해제 가능
                if (seat.status === 'locked') {
                    seat.status = 'available';
                    seatElement.classList.remove('locked');
                }
            } else {
                // 일반 모드: 좌석 선택/해제
                if (seat.status === 'locked' || seat.status === 'preserved') return; // 고정된 좌석 변경 불가

                if (seat.status === 'selected') {
                    seat.status = 'available';
                    seatElement.classList.remove('selected');
                } else {
                    seat.status = 'selected';
                    seatElement.classList.add('selected');
                }
            }

            saveToLocalStorage(); // 상태 저장
        });
        seatingArea.appendChild(seatElement);
    });
}

floor1Button.addEventListener('click', () => {
    currentFloor = "floor1";
    seats = JSON.parse(localStorage.getItem(currentFloor)) || [...floor1Seats];
    document.getElementById('stage').style.display = "block"; // 무대 표시
    floorInfo.textContent = "F1"; // 1층 정보 업데이트
    floorInfo.style.display = "block"; // 층 정보 표시
    modifyMode = false; // 수정 모드 종료
    renderSeats();
});

// 2층 버튼 클릭 핸들러
floor2Button.addEventListener('click', () => {
    currentFloor = "floor2";
    seats = JSON.parse(localStorage.getItem(currentFloor)) || [...floor2Seats];
    document.getElementById('stage').style.display = "none"; // 무대 숨기기
    floorInfo.textContent = "F2"; // 2층 정보 업데이트
    floorInfo.style.display = "block"; // 층 정보 표시
    modifyMode = false; // 수정 모드 종료
    renderSeats();
});

// 저장 버튼 클릭 핸들러
document.getElementById('saveButton').addEventListener('click', () => {
    seats.forEach((seat) => {
        if (seat.status === 'selected') {
            seat.status = 'locked'; // 선택 좌석 고정
        }
    });
    modifyMode = false; // 수정 모드 종료
    saveToLocalStorage();
    renderSeats();
    alert("좌석 상태가 저장되었습니다.");
});

// 수정 버튼 클릭 핸들러
document.getElementById('editButton').addEventListener('click', () => {
    if (seats.every((seat) => seat.status !== 'locked')) {
        alert("수정 가능한 고정 좌석이 없습니다.");
        return;
    }

    modifyMode = !modifyMode; // 수정 모드 토글
    alert(modifyMode ? "수정할 좌석을 선택해주세요" : "수정 모드가 비활성화되었습니다.");
    renderSeats();
});

resetButton.addEventListener('click', () => {
    seats = seats.map((seat) => {
        if (seat.status === 'preserved') return seat; // preserved 상태 유지
        return { ...seat, status: 'available' }; // 나머지 초기화
    });

    saveToLocalStorage();
    renderSeats();
    alert("초기화 완료 (특정 좌석 제외)");
});
// 초기 렌더링
renderSeats();