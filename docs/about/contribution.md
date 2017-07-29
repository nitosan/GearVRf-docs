Gear VR development process, guidelines, and tips; and getting answers, reporting a bug, and submitting a patch

Getting involved with the GearVRf Project is easy.

To contribute to the GearVRf Project (such as reporting bugs and submitting patches):

* Follow the [GitHub contributor guidelines](https://guides.github.com/activities/contributing-to-open-source/)
* Add the [GearVRf DCO](certificate) signoff to each commit message during development.

##Development Process

It is the responsibility of GearVRf Maintainers and Reviewers to decide whether submitted code should be integrated into the mainline code, returned for revision, or rejected.

Individual developers maintain a local copy of the GearVRf codebase using the git revision control system. Git ensures that all participants are working with a common and up-to-date code base at all times. Each developer works to develop, debug, build, and validate their own code against the current codebase, so that when the time comes to integrate into the mainline Project, their changes apply cleanly and with a minimum amount of merging effort.

The GearVRf Project development process is marked by the following highlights:


* The feature development process starts with an author discussing a proposed feature with the Maintainers and/or or Reviewers.
* The Maintainers and Reviewers evaluate the idea, give feedback, and finally approve or reject the proposal.
* The author shares the proposal with the community via the mailing list.
* The community provides feedback which can be used by the author to modify their proposal and share it with the community again.
* The above steps are repeated until the community reaches a consensus according to the Community Guidelines.
* After a consensus is reached, the author proceeds with the implementation and testing of the feature.
* After the author is confident their code is ready for integration:
    * The author generates a patch and signs off on their code.
    * The author submits a patch by opening a [pull request](https://guides.github.com/activities/hello-world/#pr).
* The Maintainers and/or Reviewers watch the pull request for the patch, test the code, and accept or reject the patch accordingly.
* After the code passes code review, the Maintainers and/or Reviewers accept the code (integrated into the main branch), which completes the development process.

After a patch has been accepted, it remains the authoring developer's responsibility to maintain the code throughout its lifecycle, and to provide security and feature updates as needed.

For more information about GitHub issues, refer to the [GitHub issues guidelines](https://guides.github.com/features/issues/).

##Coding Guidelines

When generating you own GearVRf project code, please follow these guidelines.

* General:
    * Do not abbreviate variable names.
    * Abbreviations may not be familiar to new and other project members. Code with abbreviations will not be merged.
    * Public classes must start with GVR (for example, when adding a Foo class, the class name should be GVRFoo).
    * Implementation classes should not start with GVR.

* In Java:
    * Use camel case for names (for example, setBackgroundColor).
    * Set up and use the auto-formatter for Java code in Eclipse (see below).

* In C++:
    * Use underscore case for names (for example, gvr_note4).
    * Put all JNI interface calls in a separate file with the postfix _jni. 
    <br/>For example, put the JNI interfaces for GVRSceneObject in a separate file scene_object_jni.cpp
    * Follow the actual logic in plain C++ .h and .cpp files.
    * For each new C++ file that has a correlative Java GVR class, do not add GVR as a prefix to the file name. 
    <br/>For example, for GVRSceneObject.java, the C++ file name would be scene_object.cpp/scene_object.h
    * Set up and use the auto-formatter for C++ code in Eclipse (see below).


To set up and use the Java auto-formatter in Eclipse:

1. In Eclipse, set up auto-formatting by following methods:
    * Download the [Code formatter profile: Java conventions (all spaces) XML](http://wiki.gearvrf.org/pub/GearVRF/GearVRfWikiGetInvolved/Java-conventions-all-spaces.xml) file.
    * Click __Window > Preferences__
    * In the Preferences dialog box:
        * Click __Java > Code Style > Formatter__ OR __Java > Code Style__
        * Import __Java-conventions-all-spaces.xml__ file

2. In Eclipse, auto-format your code

To set up and use the C++ auto-formatter in Eclipse:

1. In Eclipse, set up auto-formatting by following methods:
    * Download the [Code formatter profile: K&R, spaces only](http://wiki.gearvrf.org/pub/GearVRF/GearVRfWikiGetInvolved/K-and-R-C-spaces-only.xml)
    * Click __Window > Preferences__
    * In the Preferences dialog box:
        * Click __C/C++ > Code Style > Formatter__ OR __C/C++ > Code Style__
        * Import __K-and-R-C++-spaces-only.xml__ file
2. In Eclipse, auto-format your code

##Submit a Patch
The following guidelines on the submission process are provided to help you be more effective when submitting code to the GearVRf Project.

When development is complete, a patch set should be submitted via Github pull requests. A review of the patch set will take place. When accepted, the patch set will be integrated into the next build, verified, and tested. It is then the responsibility of the authoring developer to maintain the code throughout its lifecycle.

Please submit all patches in public by opening a pull request. Patches sent privately to Maintainers or Reviewers will not be considered. Because the GearVRf Project is an open source Project, be prepared for feedback and criticism--it happens to everyone. If asked to rework your code, be persistent and resubmit after making changes.

1. __Scope the patch__

    Smaller patches are generally easier to understand and test, so please submit changes in the smallest increments possible, within reason. Smaller patches are less likely to have unintended consequences, and if they do, getting to root cause is much easier for you and the Maintainers and Reviewers. Additionally, smaller patches are much more likely to be accepted.

1. __Sign your work with the__  [GearVRf DCO](certificate).

    The sign-off is a simple line at the end of the explanation for the patch, which certifies that you wrote it or otherwise have the right to pass it on as an open-source patch. The rules are pretty simple, and the sign-off is required for a patch to be accepted.

1. __Open a Github [pull request](https://guides.github.com/activities/hello-world/#pr)__

1. __What if my patch is rejected? __

    It happens all the time, for many reasons, and not necessarily because the code is bad. Take the feedback, adapt your code, and try again. Remember, the ultimate goal is to preserve the quality of the code and maintain the focus of the Project through intensive review.
    Maintainers typically have to process a lot of submissions, and the time for any individual response is generally limited. If the reason for rejection is unclear, please ask for more information on the mailing list or on the IRC channel.
    If you have a solid technical reason to disagree with feedback and you feel that reason has been overlooked, take the time to thoroughly explain it in your response.

1. __Escalation__

    If you submitted a patch and did not receive a response within 5 business days:

    * Please send an email to the GearVRf Project Developers [Mailing List](http://lists.gearvrf.org/listinfo/developers).
    * In the first line of the email, include this phrase "Patch escalation: no response for x days". 
    This is one of those rare cases where you should top post, to make sure that Maintainers and Reviewers see the escalation text, which cues them to make sure someone responds.

1. __Code review__

    Code review can be performed by all the members of the Project (not just Maintainers and Reviewers). Members can review code changes and share their opinion by comments with the following principles:
        * Discuss code; never discuss the code's author.
        * Respect and acknowledge contributions, suggestions, and comments.
        * Listen and be open to all different opinions.
        * Help each other.

    Changes are submitted via pull requests and only the Maintainer or Reviewers of the module affected by the code change should approve or reject the pull request.
    Changes should be reviewed in reasonable amount of time. Maintainers and Reviewers should leave changes open for some time (at least 1 full business day) so others can offer feedback. Review times increase with the complexity of the review.

    ##GitHub Development Tips

    __Tips for working on GitHub__

    * Fork the [GitHub repository](https://guides.github.com/activities/forking/) and clone it locally.

        Connect your local repository to the original upstream repository by adding it as a remote.

        Pull in upstream changes often to stay up-to-date so that when you submit your pull request, merge conflicts will be less likely.

        For more details, see [GitHub fork synching guidelines](https://help.github.com/articles/syncing-a-fork/).

    * Create a [branch](https://guides.github.com/introduction/flow/) for your edits.

__Our usual github workflow:__

* Goto: https://github.com/Samsung/GearVRf/
* Find the ‘fork’ button in the upper right. Fork GearVRf into your own repository
* In your own fork of GearVRf, click on the ‘branch’ button and create a new branch
* Clone your repo onto your local machine. (you’ll notice a convenience ‘HTTPS clone URL’ thing to the right on the webpage, that’ll give the full URL you need to clone. The URL will look something like: https://github.com/thomasflynn/GearVRf.git, but with your own github id in the middle there.
* You’ll need to get the Samsung GearVRf repo as the upstream remote repo for your fork. git remote add parent https://github.com/Samsung/GearVRf/
* Switch to the branch you created (git checkout branchname) on your local machine.
* Make your changes.
* Git add, git commit.
* Git push origin branchname:branchname ; <- this will push it up to your forked repo on github.
* On the webpage for your repo, you’ll see a ‘pull request button’. Click that. You’ll see your commit message and you’ll need to add your DCO (see submitting a patch on gearvrf.org. also: wiki.gearvrf.org/bin/view/GearVRF/GearVRfDCO
* Click the green ‘create pull request’ button at the bottom.

__If you need to upload a second patchset due to comments on your pull-request__

* Make changes in your branch
* Git add, git commit, git push origin branchname:branchname
* Your new changes are now a part of the commit.

__To rebase:__

* Switch to your master branch: git checkout master
* Pull the remote master: git pull parent master:master
* Force-push the update to your master branch: git push –f origin master:master
* Switch to your branch: git checkout branchname
* Rebase: git rebase master
* Git add, git commit, git push -f origin branchname:branchname

##Get Answers and Report a Bug

If you have a question about GearVRf code, have trouble following documentation, or find a bug, review the current GearVRf issues in GitHub, and if necessary, create a new issue.

__Tips on GitHub Issues__

* Check existing GearVRf issues for the answer to your [issue](https://github.com/Samsung/GearVRf/issues).
    
    Duplicating an issue slows you and others. Search through open and closed issues to see if the problem you are running into has already been addressed.

* If necessary, open a [new issue](https://github.com/Samsung/GearVRf/issues/new).

    * Clearly describe the issue. 
        * What did you expect to happen?
        * What actually happened instead?
        * How can someone else recreate the problem?
    * Link to demos that recreate the problem on things such as [JSFiddle](http://jsfiddle.net/) or [CodePen](http://codepen.io/).
    * Include system details (such as the hardware, library, and operating system you are using and their versions).
    * Paste error output and logs in the issue or in a [Gist](https://gist.github.com/). 
        
        When pasting in the issue, wrap code in three backticks: ``` so that it renders nicely.
