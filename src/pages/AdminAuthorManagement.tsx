import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Edit, Save, X } from "lucide-react";

interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

const AdminAuthorManagement = () => {
  const [authors, setAuthors] = useState<Author[]>([
    {
      id: "1",
      name: "Miles Danner",
      bio: "Consumer Technology Advisor and Buying Guide Expert. Miles specializes in helping readers make informed technology purchases.",
      avatar: "/src/assets/author-miles-avatar.jpg",
      socialLinks: {
        twitter: "@milesdanner",
        email: "miles@revuzia.com"
      }
    },
    {
      id: "2", 
      name: "Zara Velez",
      bio: "Tech journalist and product reviewer with 8+ years covering emerging technologies and consumer electronics.",
      avatar: "/src/assets/author-zara.jpg",
      socialLinks: {
        twitter: "@zaravelez",
        linkedin: "zaravelez",
        email: "zara@revuzia.com"
      }
    }
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Author>>({});

  const startEdit = (author: Author) => {
    setEditingId(author.id);
    setEditForm(author);
  };

  const saveEdit = () => {
    if (editingId && editForm) {
      setAuthors(authors.map(author => 
        author.id === editingId ? { ...author, ...editForm } : author
      ));
      setEditingId(null);
      setEditForm({});
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleImageUpload = (authorId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        if (editingId === authorId) {
          setEditForm({ ...editForm, avatar: imageUrl });
        } else {
          setAuthors(authors.map(author => 
            author.id === authorId ? { ...author, avatar: imageUrl } : author
          ));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center mb-4">
            <span className="relative inline-block text-white drop-shadow-2xl">
              AUTHOR MANAGEMENT
              <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                AUTHOR MANAGEMENT
              </span>
              <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                AUTHOR MANAGEMENT
              </span>
            </span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Manage author profiles, upload images, and edit biographical information.
          </p>
        </div>

        <div className="grid gap-6">
          {authors.map((author) => (
            <Card key={author.id} className="bg-card/50 border-border/50">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-brand">{author.name}</CardTitle>
                  {editingId === author.id ? (
                    <div className="flex gap-2">
                      <Button onClick={saveEdit} size="sm" className="bg-brand hover:bg-brand/90">
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                      <Button onClick={cancelEdit} size="sm" variant="outline">
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => startEdit(author)} size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar Section */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand/30">
                      <img 
                        src={editingId === author.id ? editForm.avatar || author.avatar : author.avatar}
                        alt={author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(author.id, e)}
                        className="hidden"
                      />
                      <Button variant="outline" size="sm" className="w-full">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Image
                      </Button>
                    </label>
                  </div>

                  {/* Profile Information */}
                  <div className="flex-1 space-y-4">
                    {editingId === author.id ? (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-white">Name</label>
                          <Input
                            value={editForm.name || ''}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            className="bg-background/50 border-border focus:border-brand"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-white">Bio</label>
                          <Textarea
                            value={editForm.bio || ''}
                            onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                            className="bg-background/50 border-border focus:border-brand h-24"
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-white">Twitter</label>
                            <Input
                              value={editForm.socialLinks?.twitter || ''}
                              onChange={(e) => setEditForm({ 
                                ...editForm, 
                                socialLinks: { ...editForm.socialLinks, twitter: e.target.value }
                              })}
                              className="bg-background/50 border-border focus:border-brand"
                              placeholder="@username"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-white">LinkedIn</label>
                            <Input
                              value={editForm.socialLinks?.linkedin || ''}
                              onChange={(e) => setEditForm({ 
                                ...editForm, 
                                socialLinks: { ...editForm.socialLinks, linkedin: e.target.value }
                              })}
                              className="bg-background/50 border-border focus:border-brand"
                              placeholder="username"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-white">Email</label>
                            <Input
                              value={editForm.socialLinks?.email || ''}
                              onChange={(e) => setEditForm({ 
                                ...editForm, 
                                socialLinks: { ...editForm.socialLinks, email: e.target.value }
                              })}
                              className="bg-background/50 border-border focus:border-brand"
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Bio</h3>
                          <p className="text-foreground/80">{author.bio}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Social Links</h3>
                          <div className="space-y-1 text-sm text-foreground/80">
                            {author.socialLinks.twitter && <p>Twitter: {author.socialLinks.twitter}</p>}
                            {author.socialLinks.linkedin && <p>LinkedIn: {author.socialLinks.linkedin}</p>}
                            {author.socialLinks.email && <p>Email: {author.socialLinks.email}</p>}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AdminAuthorManagement;