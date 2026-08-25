export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string;
}

export const projectsData: Project[] = [
	{
		id: "graph-decycler",
		title: "Graph-decycler",
		description:
			"面向复杂网络节点保护问题，采用 Min-Sum 的 decycle 算法与斯坦纳树反向保护方法。担任项目队长，负责算法设计和测试；项目于 2025 年 6 月至 2026 年 5 月参加校级科研立项并获三等奖。",
		image: "",
		category: "other",
		techStack: ["Python", "Min-Sum Decycle", "斯坦纳树"],
		status: "completed",
		sourceCode: "https://github.com/Mem0rin/Graph-decycler",
		visitUrl: "https://github.com/Mem0rin/Graph-decycler",
		startDate: "2025-01-01",
		endDate: "2026-06-30",
		featured: true,
		tags: ["科研项目", "复杂网络", "节点保护", "算法设计", "校级三等奖"],
	},
];

export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(project) => project.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(project) => project.status === "in-progress",
	).length;
	const planned = projectsData.filter(
		(project) => project.status === "planned",
	).length;

	return { total, byStatus: { completed, inProgress, planned } };
};

export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") return projectsData;
	return projectsData.filter((project) => project.category === category);
};

export const getFeaturedProjects = () =>
	projectsData.filter((project) => project.featured);

export const getAllTechStack = () => {
	const techStack = new Set<string>();
	for (const project of projectsData) {
		for (const tech of project.techStack) techStack.add(tech);
	}
	return Array.from(techStack).sort();
};
