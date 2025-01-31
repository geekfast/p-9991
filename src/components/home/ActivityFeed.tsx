export const ActivityFeed = () => {
  const activities = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/0037cc0f47d6c123c5d481636c8288128e4d544b9e77f221943804b034fdedf0?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/0037cc0f47d6c123c5d481636c8288128e4d544b9e77f221943804b034fdedf0?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/0037cc0f47d6c123c5d481636c8288128e4d544b9e77f221943804b034fdedf0?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/0037cc0f47d6c123c5d481636c8288128e4d544b9e77f221943804b034fdedf0?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/0037cc0f47d6c123c5d481636c8288128e4d544b9e77f221943804b034fdedf0?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/0037cc0f47d6c123c5d481636c8288128e4d544b9e77f221943804b034fdedf0?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/0037cc0f47d6c123c5d481636c8288128e4d544b9e77f221943804b034fdedf0?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/0037cc0f47d6c123c5d481636c8288128e4d544b9e77f221943804b034fdedf0?placeholderIfAbsent=true",
      name: "Pak Adi Dosen",
      action: "⭐️💬 ke Hongkong Shengk",
      time: "9m"
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/00993d6477fdad689949193e76c499441da9f7bab1edf15d2a149f65154432f5?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/00993d6477fdad689949193e76c499441da9f7bab1edf15d2a149f65154432f5?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/00993d6477fdad689949193e76c499441da9f7bab1edf15d2a149f65154432f5?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/00993d6477fdad689949193e76c499441da9f7bab1edf15d2a149f65154432f5?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/00993d6477fdad689949193e76c499441da9f7bab1edf15d2a149f65154432f5?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/00993d6477fdad689949193e76c499441da9f7bab1edf15d2a149f65154432f5?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/00993d6477fdad689949193e76c499441da9f7bab1edf15d2a149f65154432f5?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/00993d6477fdad689949193e76c499441da9f7bab1edf15d2a149f65154432f5?placeholderIfAbsent=true",
      name: "Abang Bakso",
      action: "🎁 from 👫",
      time: "9m"
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/43490cd97686519d71cac09a0dcb3e03fe849daf81fdec65c20c245c0e32a9f1?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/43490cd97686519d71cac09a0dcb3e03fe849daf81fdec65c20c245c0e32a9f1?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/43490cd97686519d71cac09a0dcb3e03fe849daf81fdec65c20c245c0e32a9f1?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/43490cd97686519d71cac09a0dcb3e03fe849daf81fdec65c20c245c0e32a9f1?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/43490cd97686519d71cac09a0dcb3e03fe849daf81fdec65c20c245c0e32a9f1?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/43490cd97686519d71cac09a0dcb3e03fe849daf81fdec65c20c245c0e32a9f1?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/43490cd97686519d71cac09a0dcb3e03fe849daf81fdec65c20c245c0e32a9f1?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/43490cd97686519d71cac09a0dcb3e03fe849daf81fdec65c20c245c0e32a9f1?placeholderIfAbsent=true",
      name: "Ni Made Pramita",
      action: "also [Text]",
      time: "9m"
    }
  ];

  return (
    <div className="bg-white p-4">
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img
              src={activity.avatar}
              alt=""
              className="w-10 h-10 rounded-full"
              loading="lazy"
            />
            <div className="flex-1">
              <h3 className="font-medium text-sm">{activity.name}</h3>
              <p className="text-sm text-gray-600">{activity.action}</p>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};