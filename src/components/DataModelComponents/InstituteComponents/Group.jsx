// Small card for each group for limited information
// export function GroupCard() {}
export function GroupCard({ group, onClick }) {
    const { name, description, memberCount } = group;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <p className="text-sm text-gray-700">Members: {memberCount}</p>
      </div>
    );
  }
  
// Detailed view of each group
// export function Group() {}
export function Group({ group }) {
    const { name, description, members, creationDate } = group;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Description:</strong> {description}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Created On:</strong> {new Date(creationDate).toLocaleDateString()}
        </p>
  
        {members && (
          <div className="mb-4">
            <strong>Members:</strong>
            <ul className="list-disc list-inside">
              {members.map((member, index) => (
                <li key={index} className="text-gray-800">{member}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Group
          </button>
        </div>
      </div>
    );
  }

  
  const sampleGroup = {
    name: 'Study Group',
    description: 'A group for collaborative study sessions.',
    memberCount: 10,
    creationDate: '2024-09-15',
    members: ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince'],
  };
  
  // Usage:
//   <GroupCard
//     group={sampleGroup}
//     onClick={() => console.log('Group Card Clicked')}
//   />
//   <Group group={sampleGroup} />
  