// Home.js
export default function Home() {
  const cards = [
    { name: 'Ismail',     rollno: 5555, day: 'Monday', timing: '9 am to 1 pm', center: 'Governor House' },
    { name: 'Khalid',     rollno: 5556, day: 'Monday', timing: '2 pm to 5 pm', center: 'Governor House' },
    { name: 'Ali',        rollno: 5557, day: 'Monday', timing: '7 pm to 10 pm', center: 'Governor House' },
    { name: 'Hamza',      rollno: 5558, day: 'Monday', timing: '2 pm to 5 pm', center: 'Governor House' },
    { name: 'Abdul Hadi', rollno: 5559, day: 'Monday', timing: '9 am to 1 pm', center: 'Governor House' },
  ];

  return (
    <div className="flex flex-wrap justify-around p-8 bg-gray-100">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="bg-white max-w-xs w-full p-6 m-4 rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
        >
          <div className="text-center bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            {card.name[0]}
          </div>
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-2">{card.name}</h2>
          <p className="text-gray-500 text-center mb-4">Roll No: {card.rollno}</p>
          <div className="text-gray-600">
            <p><span className="font-semibold">Day:</span> {card.day}</p>
            <p><span className="font-semibold">Timing:</span> {card.timing}</p>
            <p><span className="font-semibold">Center:</span> {card.center}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
