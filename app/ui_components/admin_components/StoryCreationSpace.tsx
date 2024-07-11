'use client';
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faShareSquare} from "@fortawesome/free-solid-svg-icons";
import axios from "@/app/axios";
import CreationSpacePanel from "@/app/ui_components/admin_components/CreationSpacePanel";
import IconTextButton from "@/app/ui_components/button_components/IconTextButton";
import Story from "@/app/interfaces/Story";
import Chapter from "@/app/interfaces/Chapter";
import {EditorPanel} from "@/app/ui_components/admin_components/EditorPanel";

const StoryCreationSpace = ({params}: { params: { id: string } }) => {
    const [story, setStory] = useState<Story>({
        imageUrl: "",
        link: "",
        author: "",
        content: [],
        datePublished: "",
        description: "",
        id: 0,
        title: ""
    });
    const [selectedChapter, setSelectedChapter] = useState<Chapter>({
        id: 0,
        title: "",
        content: "",
    });
    const [selectedChapterIndex,setSelectedChapterIndex] = useState(-1);
    const [loading, setLoading] = useState(false); // State to track loading state
    const [error, setError] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Story>(`admin/${params.id}`);
                setStory(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchStory();
    }, [params.id, refresh]);

    const addChapter = async () => {
        try {
            setLoading(true);
            // Chapter doesn't exist, add it to the list
            await addNewChapterApi(selectedChapter);
            story.content.push(selectedChapter);
            setRefresh(!refresh);
        } catch (error) {
            console.error('Error adding chapter:', error);
        } finally {
            setLoading(false);
        }
    };

    const addNewChapterApi = async (chapter: Chapter) => {
        try {
            setLoading(true);

            await axios.post<Chapter>(`/admin/${params.id}/chapters/`, {
                title:chapter.title,
                content:chapter.content
            });
        } catch (error) {
            console.error('Error adding new chapter:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStoryApi = async (chapter: Chapter) => {
        try {
            setLoading(true);
            const response = await axios.put<Chapter>(`/admin/${params.id}/chapters/`, chapter);
            const chap: Chapter = response.data;
            const chapterIndex = story.content.findIndex((chapter) => chapter.id === selectedChapter.id);
            if (chapterIndex !== -1) {
                story.content[chapterIndex] = chap;
                setStory({...story, content: [...story.content]});
            }
        } catch (error) {
            console.error('Error updating story:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSetChapterTitle = (chapterTitle: string) => {
        setSelectedChapter({...selectedChapter, title: chapterTitle});
    };

    const updateTextField = (text: string) => {
        setSelectedChapter({...selectedChapter, content: text});
    };

    const insertSpecialCharacter = (insertType: string) => {
        setSelectedChapter({...selectedChapter, content: selectedChapter.content + insertType});
    };

    const onSelectChapterToEdit = (chapterIndex: number) => {
        setSelectedChapter({...story.content[chapterIndex]});
        setSelectedChapterIndex(chapterIndex);
    };

    return (
        <>
            <div className="space-y-10 p-5">
                <h1 className="flex justify-center text-2xl">Story Creation Space</h1>

                <div className="container bordered border-2 border-blue-600 p-20 space-y-10">
                    <div className="flex justify-between space-x-20">
                        <div className="space-y-5 w-full">
                            <div className="flex justify-between">
                                <h1 className="text-3xl">{story.title}</h1>
                            </div>
                            <p className="text-lg">{story.description}</p>

                            <EditorPanel onClick={insertSpecialCharacter} chapterTitle={selectedChapter.title}
                                         setChapterTitle={handleSetChapterTitle}/>
                            <textarea
                                className="textarea textarea-info w-full"
                                value={selectedChapter.content}
                                placeholder="Write a new chapter here!"
                                onChange={(event) => updateTextField(event.target.value)}
                                disabled={loading} // Disable textarea while loading
                            />

                            <div className="flex justify-end space-x-5">
                                <IconTextButton buttonText="Add chapter" onClick={addChapter} disabled={loading}>
                                    <FontAwesomeIcon icon={faAdd} className="text-blue-600"/>
                                </IconTextButton>

                                <IconTextButton buttonText="Update chapter"
                                                onClick={() => updateStoryApi(selectedChapter)}
                                                customStyle="btn-sm btn-primary" disabled={loading}>
                                    <FontAwesomeIcon icon={faShareSquare}/>
                                </IconTextButton>

                                {loading && <span className="text-sm text-gray-500">Loading...</span>}
                            </div>
                        </div>
                        <CreationSpacePanel chapters={story.content} onSelectChapter={onSelectChapterToEdit}  hoverIndex={selectedChapterIndex}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoryCreationSpace;
