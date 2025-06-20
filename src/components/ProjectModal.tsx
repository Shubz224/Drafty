
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  date: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl md:max-w-4xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto animate-scale-in rounded-2xl mx-4 md:mx-auto p-4 md:p-6">
        <DialogHeader className="space-y-3 md:space-y-4 pb-4 md:pb-6 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
            <div className="flex-1">
              <DialogTitle className="font-space text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                {project.title}
              </DialogTitle>
              <p className="text-gray-600 font-inter mt-1 md:mt-2 text-sm md:text-base">{project.subtitle}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-space text-xs md:text-sm text-gray-500">{project.date}</span>
          </div>
        </DialogHeader>

        <div className="space-y-4 md:space-y-6 pt-4 md:pt-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-inter text-xs md:text-sm px-2 md:px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="font-inter text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
              {project.longDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button size="sm" asChild className="w-full sm:w-auto">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
