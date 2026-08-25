export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string;
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string;
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "ai-agent-transition",
		title: "正式转向 AI Agent 方向",
		description:
			"从传统 Java 后端转向 AI Agent。一方面是因为传统 Java 后端岗位有所缩减，另一方面也是因为自己对 AI 方向更感兴趣。",
		type: "education",
		startDate: "2026-08-10",
		skills: ["AI Agent"],
		icon: "material-symbols:neurology",
		color: "#EC4899",
		featured: true,
	},
	{
		id: "aerobics-national-first-prize",
		title: "健美操大赛全国一等奖",
		description: "获得健美操大赛全国一等奖。",
		type: "achievement",
		startDate: "2026-07-01",
		achievements: ["全国一等奖"],
		icon: "material-symbols:emoji-events",
		color: "#F59E0B",
		featured: true,
	},
	{
		id: "graph-decycler-research",
		title: "Graph-decycler 科研项目",
		description:
			"围绕复杂网络节点保护问题开展研究，担任队长，负责算法设计和测试。实际研究周期为 2025 年 1 月至 2026 年 6 月，其中校级科研立项周期为 2025 年 6 月至 2026 年 5 月。",
		type: "project",
		startDate: "2025-01-01",
		endDate: "2026-06-30",
		organization: "山东大学",
		position: "队长",
		skills: ["Python", "Min-Sum Decycle", "斯坦纳树", "算法设计", "测试"],
		achievements: ["校科研立项三等奖"],
		links: [
			{
				name: "GitHub 仓库",
				url: "https://github.com/Mem0rin/Graph-decycler",
				type: "project",
			},
		],
		icon: "material-symbols:hub",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "memorin-blog-launch",
		title: "个人博客上线",
		description:
			"建立个人网站，用于记录自己的学习历程；如果这些内容也能帮到其他人，那就再好不过了。",
		type: "project",
		startDate: "2025-12-16",
		links: [
			{
				name: "访问网站",
				url: "https://www.mem0rin.top/",
				type: "website",
			},
			{
				name: "GitHub 仓库",
				url: "https://github.com/Mem0rin/Mizuki",
				type: "project",
			},
		],
		icon: "material-symbols:language",
		color: "#2563EB",
		featured: true,
	},
	{
		id: "undergraduate-honors-2025",
		title: "学院三好学生与校二等奖学金",
		description: "获评学院三好学生，并获得校二等奖学金。",
		type: "achievement",
		startDate: "2025-10-01",
		organization: "山东大学",
		achievements: ["学院三好学生", "校二等奖学金"],
		icon: "material-symbols:workspace-premium",
		color: "#F59E0B",
		featured: true,
	},
	{
		id: "shandong-university-undergraduate",
		title: "进入山东大学学习",
		description: "就读于信息与计算科学专业，攻读本科学位。",
		type: "education",
		startDate: "2024-09-01",
		endDate: "2028-06-30",
		organization: "山东大学",
		position: "本科生",
		icon: "material-symbols:school",
		color: "#0EA5E9",
		featured: true,
	},
	{
		id: "high-school-python-learning",
		title: "高中阶段开始学习 Python",
		description:
			"高一入学后开始学习 Python；高二选科选择技术，进一步学习 Python 数据结构，以及简单的计算机系统、计算机组成原理和计算机网络入门知识。",
		type: "education",
		startDate: "2021-09-01",
		endDate: "2024-06-30",
		skills: ["Python", "数据结构", "计算机系统", "计算机组成原理", "计算机网络"],
		icon: "material-symbols:code",
		color: "#059669",
	},
];

const byNewest = (a: TimelineItem, b: TimelineItem) =>
	new Date(b.startDate).getTime() - new Date(a.startDate).getTime();

export const getTimelineStats = () => ({
	total: timelineData.length,
	byType: {
		education: timelineData.filter((item) => item.type === "education")
			.length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	},
});

export const getTimelineByType = (type?: string) => {
	const items =
		!type || type === "all"
			? timelineData
			: timelineData.filter((item) => item.type === type);
	return [...items].sort(byNewest);
};

export const getFeaturedTimeline = () =>
	timelineData.filter((item) => item.featured).sort(byNewest);

export const getCurrentItems = () =>
	timelineData.filter((item) => !item.endDate);

export const getTotalWorkExperience = () => ({ years: 0, months: 0 });
