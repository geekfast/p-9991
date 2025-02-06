import { MessageSquare, Star, Gift } from "lucide-react";

export const ActivityFeed = () => {
  const activities = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/0037cc0f47d6c123c5d481636c8288128e4d544b9e77f221943804b034fdedf0",
      name: "Pak Adi Dosen",
      action: "ke Hongkong Shengk",
      icons: [<Star size={16} className="text-yellow-400" />, <MessageSquare size={16} className="text-gray-400" />],
      time: "9m"
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/00993d6477fdad689949193e76c499441da9f7bab1edf15d2a149f65154432f5",
      name: "Abang Bakso",
      action: "from 👫",
      icons: [<Gift size={16} className="text-orange-500" />],
      time: "9m"
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/43490cd97686519d71cac09a0dcb3e03fe849daf81fdec65c20c245c0e32a9f1",
      name: "Ni Made Pramita",
      action: "[Text]",
      icons: [<MessageSquare size={16} className="text-blue-400" />],
      time: "9m"
    }
  ];

  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <img
              src={activity.avatar}
              alt=""
              className="w-10 h-10 rounded-full"
              loading="lazy"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1">
                <h3 className="font-medium text-sm truncate">{activity.name}</h3>
                <div className="flex items-center space-x-1">
                  {activity.icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">{activity.action}</span>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};