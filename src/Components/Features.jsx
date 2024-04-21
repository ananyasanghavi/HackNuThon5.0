
export default function Features() {
    const Boxes = [
     
      { id: 0, text: 'AI Avatar' },
      { id: 1, text: 'AI  manager Lip Syncing, face expression' },
      { id: 2, text: 'AI HR Manager will  welcome candidate' },
      { id: 3, text: ' You will Answer all questions through voice' },
      { id: 4, text: 'The  converstation can be downloaded in CSV' },
      { id: 5, text: ' AI manager can evaluate  correct  answers.'}
    ];
    return (
      <div className="mx-w-8xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold mb-8">Features of our site</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Boxes.map((box) => (
            <div key={box.id} className="fex flex-col text-gray-600 bg-gray-50 rounded-lg">
              <div className="py-3 px-3 flex items-center justify-between border-2 border-gray-500 rounded-t-lg text-gray-700 font-bold">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="flex-grow flex items-center justify-center py-6 px-8 rounded-b-lg border-2 border-gray-500 border-t-0 text-center">{box.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  