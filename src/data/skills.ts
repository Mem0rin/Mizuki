export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[];
	certifications?: string[];
	color?: string;
}

// 技能页暂不展示；确认真实技能信息后再填写并启用。
export const skillsData: Skill[] = [];

export const getSkillStats = () => ({
	total: 0,
	byLevel: {
		beginner: 0,
		intermediate: 0,
		advanced: 0,
		expert: 0,
	},
	byCategory: {
		frontend: 0,
		backend: 0,
		database: 0,
		tools: 0,
		other: 0,
	},
});

export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") return skillsData;
	return skillsData.filter((skill) => skill.category === category);
};

export const getAdvancedSkills = () =>
	skillsData.filter(
		(skill) => skill.level === "advanced" || skill.level === "expert",
	);

export const getTotalExperience = () => ({ years: 0, months: 0 });
